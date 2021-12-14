import { useState } from 'react';

import { useQuery } from '@apollo/client';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { initSearchFilters } from 'src/apollo/links/localCache/initFilters';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import { State } from 'src/graphql';
import Tr from 'src/local';
import RVLS from 'src/rvls';

import { ControlAdvancedSearch, SearchField, SearchIn, SearchMethod } from './components';
import style from './style';

initSearchFilters();

const Search: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const {
    data: { getSearchFilters: filters },
  } = useQuery(State.GET_SEARCH_FILTERS);

  const handleSearchFilters = (nextSearch: TYPES.MaybeIn<TYPES.SearchFilters>): void => {
    RVLS({ ...filters, ...nextSearch });
  };

  return (
    <CardWrapper filters={filters}>
      <Box>
        <Box px={1}>
          <SearchField handleSearchFilters={handleSearchFilters} keyword={filters.keyword} />
        </Box>
        {isAdvancedSearch ? (
          <Box
            borderRadius={5}
            boxShadow={5}
            className={classes.advancedSearchBox}
            display="flex"
            flexDirection="column"
            p={1}
            position="relative"
            pt={4}
            zIndex={2}>
            <ControlAdvancedSearch
              handleSearchFilters={handleSearchFilters}
              setIsAdvancedSearch={setIsAdvancedSearch}
            />
            <Box display="flex" mb={2}>
              <SearchMethod
                handleSearchFilters={handleSearchFilters}
                method={filters.method}
              />
              <SearchIn handleSearchFilters={handleSearchFilters} searchIn={filters.in} />
            </Box>
            <Box>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  InputProps={{ color: 'secondary' }}
                  label={Tr('words excluded')}
                  maxRows={2}
                  multiline
                  onChange={(e) => handleSearchFilters({ exclude: e.target.value })}
                  placeholder={Tr('i exclude')}
                  size="small"
                  value={filters.exclude}
                  variant="outlined"
                />
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.fatwasOnly}
                    onChange={(e) => handleSearchFilters({ fatwasOnly: e.target.checked })}
                  />
                }
                label={Tr('in fatwas only')}
              />
            </Box>
          </Box>
        ) : (
          <FormControl fullWidth>
            <Box
              alignItems="center"
              className={classes.advancedSearchButton}
              display="flex"
              justifyContent="space-between"
              onClick={() => setIsAdvancedSearch(true)}
              pr={1.5}
              py={1}>
              <Box alignItems="center" display="flex">
                <Box alignItems="center" display="flex" ml={1}>
                  <Typography color="textSecondary">{Tr('advancedSearch')}</Typography>
                  <Icons.KeyboardArrowDownRounded color="action" />
                </Box>
              </Box>
            </Box>
          </FormControl>
        )}
      </Box>
    </CardWrapper>
  );
};

export default withStyles(style)(Search);
