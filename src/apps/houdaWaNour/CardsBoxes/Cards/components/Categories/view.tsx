import { Box, lighten, withStyles } from '@material-ui/core';
import { KEYS } from 'src/defs';
import { setReactiveLocalFilters } from 'src/helpers';

import style from '../style';
import ExpandableButton from './ExpandableCategoryButton';

const CategoriesView: React.FC<TYPES.CategoriesViewProps> = ({
  data,
  filters,
  fetchMore,
  loading,
  theme,
  classes,
}) => {
  const {
    categories: { all, selected = {}, expanded = {}, ...restItemFilters },
    ...restFilters
  } = filters;

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
    setReactiveLocalFilters({
      ...restFilters,
      categories: { all: nextAll, selected: nextSelected, expanded, ...restItemFilters },
    });
  };

  const expandableItems = (filter: { parent: number } = { parent: 0 }): React.ReactElement => (
    <>
      {data
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
        ))}
    </>
  );

  return expandableItems();
};

export default withStyles(style, { withTheme: true })(CategoriesView);
