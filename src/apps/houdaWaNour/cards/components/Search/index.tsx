import { useState } from 'react';

import { useQuery } from '@apollo/client';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import * as Icons from '@mui/icons-material';
import { initSearchFilters } from 'src/apollo/links/localCache/initFilters';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import { State } from 'src/graphql';
import Tr from 'src/local';
import RVLS from 'src/rvls';

import { ControlAdvancedSearch, SearchField, SearchIn, SearchMethod } from './components';
import style from './style';

initSearchFilters();

const Search: React.FC<TYPES.ClassesProps & TYPES.ThemeProps> = ({ classes, theme }) => {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const {
    data: { getSearchFilters: filters },
  } = useQuery(State.GET_SEARCH_FILTERS);

  const handleSearchFilters = (nextSearch: TYPES.MaybeIn<TYPES.SearchFilters>): void => {
    RVLS({ ...filters, ...nextSearch });
  };

  const ButtonAdvancedSearch: React.FC = () => (
    <Box
      alignItems="center"
      className={classes.advancedSearchButton}
      display="flex"
      justifyContent="space-between"
      mr="auto"
      onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}
      pr={1}
      py={0.5}>
      <Box alignItems="center" display="flex">
        <Box alignItems="center" display="flex" ml={1}>
          <Icons.ManageSearch color="action" />
          <Typography color="textSecondary" style={{ marginRight: 6 }}>
            {Tr('advancedSearch')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <CardWrapper filters={filters} buttonAdvancedSearch={<ButtonAdvancedSearch />}>
      {isAdvancedSearch && (
        <Box position="relative">
          <Box
            position="absolute"
            width="max-content"
            sx={{
              [theme.breakpoints.down('sm')]: {
                width: 'auto',
              },
            }}>
            <Box
              borderRadius="5px"
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
                    onChange={(e) => handleSearchFilters({ exclude: e.target.value })}
                    placeholder={Tr('i exclude')}
                    size="small"
                    value={filters.exclude}
                    variant="outlined"
                  />
                </FormControl>
                <FormControlLabel
                  className={classes.fatwasOnly}
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
          </Box>
        </Box>
      )}
      <Box px={1}>
        <SearchField handleSearchFilters={handleSearchFilters} keyword={filters.keyword} />
      </Box>
    </CardWrapper>
  );
};

export default withStyles(style, { withTheme: true })(Search);
