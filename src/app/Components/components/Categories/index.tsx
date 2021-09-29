import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { Box, IconButton, lighten, withStyles } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import style from 'src/app/style';
import { Query, State } from 'src/graphql';
import { reactiveFilters } from 'src/helpers';

const Categories: React.FC<TYPES.CategoriesProps> = ({ classes, theme }) => {
  const {
    data: {
      filters: {
        categories: { all, selected, expanded },
        ...filters
      },
    },
  } = useQuery(State.FILTERS);

  const {
    loading,
    error,
    data = { getCategories: [] },
    fetchMore,
  } = useQuery(Query.CATEGORY.CATEGORIES);

  useEffect(() => {
    const expandedIds = Object.keys(expanded).filter((id) => expanded[id]);
    if (expandedIds.length) {
      const notLoadedExpanded = expandedIds.filter(
        (id) => data.getCategories.filter(({ parent }) => parent === id).length
      );
      if (notLoadedExpanded.length) {
        notLoadedExpanded.forEach((id) =>
          fetchMore({ variables: { args: { filter: { parent: id } } } })
        );
      }
    }
  }, [expanded, data, fetchMore]);

  const handleItemClick = (_id: string): void => {
    const nextSelected = { ...selected, [_id]: !selected[_id] };
    const itemsLength = Object.keys(selected).length;
    const selectedLength = Object.keys(nextSelected).filter((id) => nextSelected[id]).length;
    let nextAll = all;
    if (!selectedLength) nextAll = false;
    else if (selectedLength < itemsLength) nextAll = '';
    else nextAll = true;
    reactiveFilters({
      ...filters,
      categories: { all: nextAll, selected: nextSelected, expanded },
    });
  };

  const expandableItems = (filter: { parent: number } = { parent: 0 }): React.ComponentType =>
    data.getCategories
      .filter(({ parent }) => parent === filter.parent)
      .map(({ _id, name, ID, level, child }) => (
        <Box
          borderColor={lighten(theme.palette.common.grayDark, 0.8)}
          className={`${classes.selectableItemWrapper}${level > 1 ? ' child-wrapper' : ''}`}
          display="flex"
          flexDirection="column"
          key={_id}>
          <Box
            className={`${classes.selectableItem}${selected[_id] ? ' selected' : ''}${
              expanded[_id] && child ? ' expanded' : ''
            }${level > 1 ? ' child' : ''}`}
            display="flex"
            py={0.3}
            width="100%">
            <Box alignItems="start" className={classes.expandableItem} display="flex" mt={0.1}>
              <IconButton
                key={`${_id}-expandable`}
                onClick={() => {
                  if (level < 7 && !expanded[_id] && child)
                    fetchMore({ variables: { args: { filter: { parent: ID } } } });
                  reactiveFilters({
                    ...filters,
                    categories: {
                      all,
                      selected,
                      expanded: {
                        ...expanded,
                        [_id]: !expanded[_id],
                      },
                    },
                  });
                }}
                size="small">
                {!child && (
                  <Icons.FiberManualRecord
                    style={{ fontSize: '0.65rem', paddingTop: theme.spacing(0.5) }}
                  />
                )}
                {child && loading && (
                  <Icons.LoopRounded className="spin" style={{ fontSize: '0.8rem' }} />
                )}
                {child &&
                  level < 7 &&
                  (!loading && expanded[_id] ? (
                    <Icons.MinimizeRounded
                      style={{ fontSize: '0.8rem', paddingBottom: theme.spacing(0.5) }}
                    />
                  ) : (
                    <Icons.Add style={{ fontSize: '0.8rem' }} />
                  ))}
              </IconButton>
            </Box>
            <Box key={`${_id}-selectable`} onClick={() => handleItemClick(_id)}>
              {name}
            </Box>
          </Box>
          {level < 8 && expanded[_id] && (
            <Box key={`${_id}-nest-list`} ml={1}>
              {expandableItems({ parent: ID })}
            </Box>
          )}
        </Box>
      ));

  return (
    <Box height="100%" overflow="auto">
      {expandableItems()}
    </Box>
  );
};

export default withStyles(style, { withTheme: true })(Categories);
