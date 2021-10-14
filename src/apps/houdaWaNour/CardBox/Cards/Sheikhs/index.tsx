import { useQuery } from '@apollo/client';
import { Box, withStyles } from '@material-ui/core';
import { ReactiveVars } from 'src/apollo';
import style from 'src/apps/houdaWaNour/style';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { setReactiveLocalFilters } from 'src/helpers';

const CardName = KEYS.sheikhs;

const Sheikhs: React.FC<TYPES.SheikhsProps> = ({ classes }) => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);
  const { loading, error, data = { getSheikhs: [] } } = useQuery(Query.SHEIKH.SHEIKHS);

  if (error) ReactiveVars.alert({ error, open: true, severity: KEYS.error });

  const handleItemClick = (_id: string): void => {
    const { selected, all, expanded } = filters[CardName];
    const nextSelected = { ...selected, [_id]: !selected[_id] };
    const itemsLength = Object.keys(selected).length;
    const selectedLength = Object.keys(nextSelected).filter((id) => nextSelected[id]).length;
    let nextAll = all;
    if (!selectedLength) nextAll = false;
    else if (selectedLength < itemsLength) nextAll = KEYS.indeterminate;
    else nextAll = true;
    setReactiveLocalFilters({
      ...filters,
      [CardName]: { all: nextAll, selected: nextSelected, expanded },
    });
  };

  return (
    <Box height="100%" overflow="auto">
      {data?.getSheikhs?.map(({ _id, name }) => (
        <Box
          className={`${classes.selectableItem} ${
            filters[CardName].selected[_id] ? 'selected' : KEYS.indeterminate
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
