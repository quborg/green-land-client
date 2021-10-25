import { Box, IconButton, withStyles } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import style from 'src/apps/houdaWaNour/style';
import { CONST } from 'src/defs';

const ResetSearch = CONST.App.FILTERS.search;

const ControlAdvancedSearch: React.FC<TYPES.ControlAdvancedSearchProps> = ({
  handleSearchFilters,
  setAdvancedSearch,
  theme,
}) => (
  <Box height={0} position="absolute" right={theme.spacing(1)} top={theme.spacing(0.5)}>
    <IconButton onClick={() => handleSearchFilters(ResetSearch)} size="small">
      <Icons.RestartAltRounded color="secondary" style={{ fontSize: '1.1rem' }} />
    </IconButton>
    <IconButton onClick={() => setAdvancedSearch(false)} size="small">
      <Icons.CloseRounded color="secondary" style={{ fontSize: '1.2rem' }} />
    </IconButton>
  </Box>
);

export default withStyles({}, { withTheme: true })(ControlAdvancedSearch);
