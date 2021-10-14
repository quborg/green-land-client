import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import style from 'src/apps/houdaWaNour/style';
import { CONST } from 'src/defs';
import { State } from 'src/graphql';
import { getLocalFilters, setReactiveLocalFilters } from 'src/helpers';
import Tr from 'src/local';

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
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icons.Search fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleSearchFilters({ keyword: '' })}>
                  <Icons.Close fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleSearchFilters({ keyword: e.target.value })}
          placeholder=".."
          value={search.keyword}
        />
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
          <Box className={classes.closeAdvancedSearch} height={0} position="absolute">
            <IconButton
              onClick={() => handleSearchFilters(CONST.App.FILTERS.search)}
              size="small">
              <Icons.ReplayRounded color="secondary" fontSize="small" />
            </IconButton>
            <IconButton onClick={() => setAdvancedSearch(false)} size="small">
              <Icons.CloseRounded color="secondary" />
            </IconButton>
          </Box>
          <Box display="flex" mb={2}>
            <Box flex="1">
              <FormControl>
                <FormLabel component="legend">{Tr('search method')}</FormLabel>
                <RadioGroup
                  name="method"
                  onChange={(e) =>
                    handleSearchFilters({
                      method: e.target.value as TYPES.FiltersProps['search']['method'],
                    })
                  }
                  value={search.method}>
                  <FormControlLabel
                    control={<Radio size="small" />}
                    label={Tr('any word')}
                    value="any"
                  />
                  <FormControlLabel
                    control={<Radio size="small" />}
                    label={Tr('all words')}
                    value="all"
                  />
                  <FormControlLabel
                    control={<Radio size="small" />}
                    label={Tr('exact search')}
                    value="exact"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box flex="1">
              <FormControl>
                <FormLabel component="legend">{Tr('search in')}</FormLabel>
                <RadioGroup
                  name="in"
                  onChange={(e) =>
                    handleSearchFilters({
                      in: e.target.value as TYPES.FiltersProps['search']['in'],
                    })
                  }
                  value={search.in}>
                  <FormControlLabel
                    control={<Radio size="small" />}
                    label={Tr('indexing')}
                    value="indexing"
                  />
                  <FormControlLabel
                    control={<Radio size="small" />}
                    label={Tr('dump')}
                    value="dump"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>

          <Box>
            <FormControl fullWidth>
              <TextField
                fullWidth
                InputProps={{ color: 'secondary' }}
                label={Tr('words excluded')}
                multiline
                onChange={(e) => handleSearchFilters({ exclude: e.target.value })}
                placeholder={Tr('i exclude')}
                rowsMax={2}
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
