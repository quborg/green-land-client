import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box, Checkbox, FormControlLabel, Typography, withStyles } from '@material-ui/core';
import { KEYS } from 'src/defs';
import { State } from 'src/graphql';
import { reactiveFilters } from 'src/helpers';
import { Local as Tr } from 'src/local';

const Title: React.FC<TYPES.TitleCardProps> = ({ cardName, theme }) => {
  const [selectable] = useState(
    [KEYS.sheikhs, KEYS.books, KEYS.categories].includes(cardName)
  );

  const {
    data: {
      filters: {
        [selectable ? cardName : KEYS.default]: { all, selected = {}, expanded = {} },
        ...restFilters
      },
    },
  } = useQuery(State.FILTERS);

  const handleSelectAll = (nextAll: boolean): void => {
    let nextSelected = selected;
    let overrideNextAll = nextAll;
    if (all === KEYS.indeterminate && nextAll) overrideNextAll = false;
    Object.keys(selected).forEach((_id) => {
      nextSelected = { ...nextSelected, [_id]: overrideNextAll };
    });
    reactiveFilters({
      ...restFilters,
      [cardName]: {
        all: overrideNextAll,
        selected: nextSelected,
        ...(cardName === KEYS.categories && { expanded }),
      },
    });
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      minHeight={theme.spacing(4)}
      px={selectable ? 0 : 1}>
      {selectable ? (
        <FormControlLabel
          control={
            <Checkbox
              checked={!!all}
              indeterminate={all === KEYS.indeterminate}
              onChange={(e) => handleSelectAll(e.target.checked)}
              size="small"
              style={{ padding: theme.spacing(1 / 2) }}
            />
          }
          label={Tr[cardName]}
          style={{ margin: 0, width: '100%' }}
        />
      ) : (
        <Typography>{Tr[cardName]}</Typography>
      )}
    </Box>
  );
};

export default withStyles({}, { withTheme: true })(Title);
