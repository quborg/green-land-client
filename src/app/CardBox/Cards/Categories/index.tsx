import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { Badge, Box, lighten, withStyles } from '@material-ui/core';
import style from 'src/app/style';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { reactiveFilters } from 'src/helpers';

import ExpandableButton from './ExpandableButton';

const Categories: React.FC<TYPES.CategoriesProps> = ({ classes, theme }) => {
  const {
    data: {
      filters: {
        categories: { all, selected, expanded },
        ...restFilters
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
    const expandedIds = Object.keys(expanded).filter((_id) => expanded[_id]);
    if (expandedIds.length) {
      const expandedNotLoaded = expandedIds.filter(
        (_id) => !data.getCategories.filter(({ parent }) => parent === _id).length
      );
      const categoriesNotLoaded = data.getCategories.filter(
        ({ _id }) => expandedNotLoaded.filter((notLoaded_id) => notLoaded_id === _id).length
      );
      if (categoriesNotLoaded.length) {
        categoriesNotLoaded.forEach(({ ID }) =>
          fetchMore({ variables: { args: { filter: { parent: ID } } } })
        );
      }
    }
  }, [expanded, data, fetchMore]);

  const handleItemClick = (_id: string): void => {
    const nextSelected = { ...selected, [_id]: !selected[_id] };
    const prevSelectedLength = Object.keys(selected).length;
    const nextSelectedLength = Object.keys(nextSelected).filter(
      (id) => nextSelected[id]
    ).length;
    let nextAll = all;
    if (!nextSelectedLength) nextAll = false;
    else if (nextSelectedLength < prevSelectedLength) nextAll = KEYS.indeterminate;
    else nextAll = true;
    reactiveFilters({
      ...restFilters,
      categories: { all: nextAll, selected: nextSelected, expanded: { ...expanded } },
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
            <ExpandableButton
              {...{
                _id,
                ID,
                child,
                level,
                all,
                selected,
                expanded,
                restFilters,
                fetchMore,
                loading,
              }}
            />
            <Box
              display="flex"
              key={`${_id}-selectable`}
              onClick={() => handleItemClick(_id)}
              width="100%">
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
