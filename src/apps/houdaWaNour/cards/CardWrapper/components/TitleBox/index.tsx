import {
  Badge,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { KEYS } from 'src/defs';
import { Local as Tr } from 'src/local';
import RVLS from 'src/rvls';

import style from './style';

const TitleCardView: React.FC<TYPES.TitleCardProps> = ({
  data,
  dataLength,
  filters,
  classes,
  theme,
}) => {
  const {
    cardName,
    count,
    selectableAll,
    all,
    selected = {},
    searchableItems,
    openSearch,
  } = filters;

  const toggleSelectAll = (allEvent: boolean): void => {
    let nextSelected = {};
    let nextAll = allEvent;
    if (all === KEYS.indeterminate && allEvent) nextAll = false;
    if (cardName === KEYS.categories && data) {
      data
        .filter(({ parent }) => parent === 0)
        .forEach(({ _id }) => {
          nextSelected = { ...nextSelected, [_id]: nextAll };
        });
    } else
      Object.keys(selected).forEach((_id) => {
        nextSelected = { ...nextSelected, [_id]: nextAll };
      });
    RVLS({
      ...filters,
      all: nextAll,
      selected: nextSelected,
    });
  };

  const toggleOpenSearch = (): void => {
    RVLS({ ...filters, openSearch: !openSearch });
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      minHeight={theme.spacing(4)}
      pl={selectableAll ? 0 : 1}>
      <Box alignItems="center" display="flex" width="1">
        {selectableAll && (
          <FormControlLabel
            control={
              <Checkbox
                checked={!!all}
                indeterminate={all === KEYS.indeterminate}
                onChange={(e) => toggleSelectAll(e.target.checked)}
                size="small"
                style={{ padding: theme.spacing(1 / 2) }}
              />
            }
            label=""
            style={{ margin: 0 }}
          />
        )}
        <Typography>{Tr[cardName]}</Typography>
        {typeof count === 'number' && (
          <Badge
            badgeContent={`${dataLength}/${count}`}
            className={classes.badge}
            max={500000}
            showZero
          />
        )}
        {searchableItems && (
          <Box ml="auto" mr={0.5}>
            <IconButton onClick={toggleOpenSearch} size="small">
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

export default withStyles(style, { withTheme: true })(TitleCardView);
