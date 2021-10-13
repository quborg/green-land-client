import { useQuery } from '@apollo/client';
import { Box, withStyles } from '@material-ui/core';
import style from 'src/app/style';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { reactiveAlert, reactiveFilters } from 'src/helpers';

const CardName = KEYS.books;

const Books: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);
  const { loading, error, data = { getBooks: [] } } = useQuery(Query.BOOK.BOOKS);

  reactiveAlert(loading);
  if (error) reactiveAlert(error);

  const handleItemClick = (_id: string): void => {
    const { all, selected, expanded } = filters[CardName];
    const nextSelected = { ...selected, [_id]: !selected[_id] };
    const itemsLength = Object.keys(selected).length;
    const selectedLength = Object.keys(nextSelected).filter((id) => nextSelected[id]).length;
    let nextAll = all;
    if (!selectedLength) nextAll = false;
    else if (selectedLength < itemsLength) nextAll = KEYS.indeterminate;
    else nextAll = true;
    console.log('nextAll', nextAll);
    reactiveFilters({
      ...filters,
      [CardName]: { all: nextAll, selected: nextSelected, expanded },
    });
  };

  return (
    <Box height="100%" overflow="auto">
      {data?.getBooks?.map(({ _id, title }) => (
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
    </Box>
  );
};

export default withStyles(style)(Books);
