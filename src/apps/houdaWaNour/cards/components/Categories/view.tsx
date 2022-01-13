import { Box, lighten } from '@mui/material';
import { withStyles } from '@mui/styles';
import RVLS from 'src/rvls';

import style from '../style';
import ExpandButton from './ExpandButton';
import { getCheckboxStateAll, unselectChildren, unselectParents } from './helper';

const CategoriesView: React.FC<TYPES.CategoriesViewProps> = ({
  data,
  filters,
  loading,
  networkStatus,
  theme,
  classes,
}) => {
  const { all, selected } = filters;

  const handleItemClick = (_id: string): void => {
    let nextSelected = { ...selected, [_id]: !selected[_id] };
    nextSelected = unselectParents(_id, nextSelected, data);
    nextSelected = unselectChildren(_id, nextSelected, data);
    const nextAll = getCheckboxStateAll(all, nextSelected, data);
    RVLS({ ...filters, all: nextAll, selected: nextSelected });
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
                filters.expanded[_id] && child ? ' expanded' : ''
              }${level > 1 ? ' child' : ''}`}
              display="flex"
              py={0.3}
              width="100%">
              <ExpandButton {...{ _id, ID, child, filters, loading, networkStatus }} />
              <Box
                display="flex"
                key={`${_id}-selectable`}
                onClick={() => handleItemClick(_id)}
                width="100%">
                {name}
              </Box>
            </Box>
            {child && filters.expanded[_id] && (
              <Box key={`${_id}-nest-list`} mr={1}>
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
