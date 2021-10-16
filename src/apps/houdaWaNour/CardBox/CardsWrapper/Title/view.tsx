import { Box, Checkbox, FormControlLabel, Typography, withStyles } from '@material-ui/core';
import { KEYS } from 'src/defs';
import { setReactiveLocalFilters } from 'src/helpers';
import { Local as Tr } from 'src/local';

const TitleCardView: React.FC<TYPES.TitleCardViewProps> = ({
  cardName,
  selectable,
  filters,
  restFilters,
  theme,
}) => {
  const { all, selected = {}, expanded = {} } = filters;

  const handleSelectAll = (nextAll: boolean): void => {
    let nextSelected = selected;
    let overrideNextAll = nextAll;
    if (all === KEYS.indeterminate && nextAll) overrideNextAll = false;
    Object.keys(selected).forEach((_id) => {
      nextSelected = { ...nextSelected, [_id]: overrideNextAll };
    });
    setReactiveLocalFilters({
      [cardName]: {
        all: overrideNextAll,
        selected: nextSelected,
        ...(cardName === KEYS.categories && { expanded }),
      },
      ...restFilters,
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

export default withStyles({}, { withTheme: true })(TitleCardView);
