import { Box, withStyles } from '@material-ui/core';
import RVLS from 'src/rvls';

import style from '../style';
import { getNextAll } from './helper';

const BooksView: React.FC<TYPES.BooksViewProps> = ({ classes, data, filters }) => {
  const handleItemClick = (_id: string): void => {
    const { all, selected } = filters;
    const nextSelected = { ...selected, [_id]: !selected[_id] };
    const nextAll = getNextAll(all, nextSelected, data);
    RVLS({
      ...filters,
      all: nextAll,
      selected: nextSelected,
    });
  };

  return (
    <>
      {data.map(({ _id, title }) => (
        <Box
          className={`${classes.selectableItem} ${filters.selected[_id] ? 'selected' : ''}`}
          key={_id}
          onClick={() => handleItemClick(_id)}
          px={0.5}
          py={0.3}>
          {title}
        </Box>
      ))}
    </>
  );
};

export default withStyles(style)(BooksView);
