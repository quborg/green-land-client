import { Box, withStyles } from '@material-ui/core';
import { KEYS } from 'src/defs';
import { setReactiveLocalFilters } from 'src/helpers';

import style from '../style';

const CardName = KEYS.books;

const BooksView: React.FC<TYPES.BooksViewProps> = ({ classes, data, filters }) => {
  const handleItemClick = (_id: string): void => {
    const { all, selected, expanded, ...restItemFilters } = filters[CardName];
    const nextSelected = { ...selected, [_id]: !selected[_id] };
    const itemsLength = Object.keys(selected).length;
    const selectedLength = Object.keys(nextSelected).filter((id) => nextSelected[id]).length;
    let nextAll = all;
    if (!selectedLength) nextAll = false;
    else if (selectedLength < itemsLength) nextAll = KEYS.indeterminate;
    else nextAll = true;
    setReactiveLocalFilters({
      ...filters,
      [CardName]: { all: nextAll, selected: nextSelected, expanded, ...restItemFilters },
    });
  };

  return (
    <>
      {data.map(({ _id, title }) => (
        <Box
          className={`${classes.selectableItem} ${
            filters[CardName].selected[_id] ? 'selected' : KEYS.indeterminate
          }`}
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
