import { useQuery } from '@apollo/client';
import { Box, withStyles } from '@material-ui/core';
import style from 'src/app/style';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { reactiveAlert, reactiveFilters } from 'src/helpers';

const cName = KEYS.sheikhs;

const Sheikhs: React.FC<TYPES.SheikhsProps> = ({ classes }) => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);
  const { loading, error, data = { getSheikhs: [] } } = useQuery(Query.SHEIKH.SHEIKHS);

  reactiveAlert(loading);
  if (error) reactiveAlert(error);

  const handleItemClick = (_id: string): void => {
    const { selected, all, expanded } = filters[cName];
    const nextSelected = { ...selected, [_id]: !selected[_id] };
    const itemsLength = Object.keys(selected).length;
    const selectedLength = Object.keys(nextSelected).filter((id) => nextSelected[id]).length;
    let nextAll = all;
    if (!selectedLength) nextAll = false;
    else if (selectedLength < itemsLength) nextAll = '';
    else nextAll = true;
    reactiveFilters({
      ...filters,
      [cName]: { all: nextAll, selected: nextSelected, expanded },
    });
  };

  return (
    <Box height="100%" overflow="auto">
      {data?.getSheikhs?.map(({ _id, name }) => (
        <Box
          className={`${classes.selectableItem} ${
            filters[cName].selected[_id] ? 'selected' : ''
          }`}
          key={_id}
          onClick={() => handleItemClick(_id)}
          px={0.5}
          py={0.3}>
          {name}
        </Box>
      ))}
    </Box>
  );
};

export default withStyles(style)(Sheikhs);
