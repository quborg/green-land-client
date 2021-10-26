import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { KEYS } from 'src/defs';
import { setReactiveLocalFilters } from 'src/helpers';
import { Local as Tr } from 'src/local';

const TitleCardView: React.FC<TYPES.TitleCardViewProps> = ({
  cardName,
  selectableAll,
  searchableItems,
  itemFilters,
  restFilters,
  categoriesData0,
  theme,
}) => {
  const { all, selected = {}, expanded = {}, openSearch, ...restItemFilters } = itemFilters;

  const handleSelectAll = (nextAll: boolean): void => {
    let nextSelected = {};
    let overrideNextAll = nextAll;
    if (all === KEYS.indeterminate && nextAll) overrideNextAll = false;
    if (cardName === KEYS.categories) {
      categoriesData0.forEach(({ _id }) => {
        nextSelected = { ...nextSelected, [_id]: overrideNextAll };
      });
    } else
      Object.keys(selected).forEach((_id) => {
        nextSelected = { ...nextSelected, [_id]: overrideNextAll };
      });
    setReactiveLocalFilters({
      [cardName]: {
        all: overrideNextAll,
        selected: nextSelected,
        ...(cardName === KEYS.categories && { expanded }),
        openSearch,
        ...restItemFilters,
      },
      ...restFilters,
    });
  };

  const setOpenSearch = (): void => {
    setReactiveLocalFilters({
      [cardName]: {
        ...restItemFilters,
        all,
        selected,
        ...(cardName === KEYS.categories && { expanded }),
        openSearch: !openSearch,
      },
      ...restFilters,
    });
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      minHeight={theme.spacing(4)}
      px={selectableAll ? 0 : 1}>
      <Box alignItems="center" display="flex" width="1">
        {selectableAll && (
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
            label=""
            style={{ margin: 0 }}
          />
        )}
        <Typography>{Tr[cardName]}</Typography>
        {searchableItems && (
          <Box ml="auto" mr={0.5}>
            <IconButton onClick={setOpenSearch} size="small">
              {openSearch ? (
                <Icons.SearchOff
                  style={{ color: theme.palette.common.pink, fontSize: '1rem' }}
                />
              ) : (
                <Icons.Search style={{ color: theme.palette.common.teal, fontSize: '1rem' }} />
              )}
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default withStyles({}, { withTheme: true })(TitleCardView);
