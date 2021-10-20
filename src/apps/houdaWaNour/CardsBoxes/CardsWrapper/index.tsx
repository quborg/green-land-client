import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box, Divider, Paper, withStyles } from '@material-ui/core';
import { KEYS } from 'src/defs';
import { State } from 'src/graphql';
import { setReactiveLocalFilters } from 'src/helpers';

import { SearchItemFilter, TitleBox } from './components';

const CardsWrapper: React.FC<TYPES.CardNameProps> = ({ children, cardName }) => {
  const [searchable] = useState(
    [KEYS.sheikhs, KEYS.books, KEYS.categories].includes(cardName)
  );

  const {
    data: {
      filters: {
        [searchable ? cardName : KEYS.default]: { keyword, openSearch, ...restItemFilters },
        ...restFilters
      },
    },
  } = useQuery(State.FILTERS);

  const setKeyword = (key: string): void => {
    setReactiveLocalFilters({
      [cardName]: {
        keyword: key,
        openSearch,
        ...restItemFilters,
      },
      ...restFilters,
    });
  };

  return (
    <Box height="100%">
      <Box height="100%" p={0.67}>
        <Paper elevation={3} style={{ height: '100%' }}>
          <Box height="100%">
            <Box>
              <TitleBox cardName={cardName} />
            </Box>
            {searchable && openSearch && (
              <>
                <Divider />
                <SearchItemFilter {...{ keyword, setKeyword }} />
              </>
            )}
            <Divider />
            <Box height="100%">{children}</Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default withStyles({}, { withTheme: true })(CardsWrapper);
