import { useEffect, useState } from 'react';

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
import { State } from 'src/graphql';
import { getLocalFilters, setReactiveLocalFilters } from 'src/helpers';
import Tr from 'src/local';

import { ControlAdvancedSearch, SearchField, SearchIn, SearchMethod } from './components';
import style from './style';

const Search: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [search, setSearch] = useState(getLocalFilters().search);

  const {
    data: { filters },
  } = useQuery(State.FILTERS);

  useEffect(() => {
    const isDiff = JSON.stringify(filters.search) !== JSON.stringify(search);
    if (isDiff) setSearch(filters.search);
  }, [filters.search, search]);

  const handleSearchFilters = (
    nextSearch: TYPES.MaybeIn<TYPES.FiltersProps['search']>
  ): void => {
    setReactiveLocalFilters({ ...filters, search: { ...search, ...nextSearch } });
  };

  return (
    <Box>
      <Box>
        <SearchField handleSearchFilters={handleSearchFilters} keyword={search.keyword} />
      </Box>
      {advancedSearch ? (
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
            setAdvancedSearch={setAdvancedSearch}
          />
          <Box display="flex" mb={2}>
            <SearchMethod handleSearchFilters={handleSearchFilters} method={search.method} />
            <SearchIn handleSearchFilters={handleSearchFilters} searchIn={search.in} />
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
                value={search.exclude}
                variant="outlined"
              />
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={search.fatwasOnly}
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
            onClick={() => setAdvancedSearch(true)}
            pr={1.5}
            py={1}>
            <Box alignItems="center" display="flex">
              <Icons.FindReplaceRounded color="action" fontSize="small" />
              <Box alignItems="center" display="flex" ml={1}>
                <Typography color="textSecondary">{Tr('advancedSearch')}</Typography>
                <Icons.KeyboardArrowDownRounded color="action" />
              </Box>
            </Box>
            <Icons.FilterListRounded color="action" fontSize="small" />
          </Box>
        </FormControl>
      )}
    </Box>
  );
};

export default withStyles(style)(Search);
