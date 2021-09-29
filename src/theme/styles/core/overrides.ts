import { createMuiTheme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';

const defaultSpacing = createMuiTheme().spacing;

const overrides: Overrides = {
  MUIDataTable: {
    paper: {
      maxHeight: `calc(100vh - ${defaultSpacing(12 + 8)}px)`,
      display: 'flex',
      flexDirection: 'column',
    },
  },
  MUIDataTableToolbar: {
    actions: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },
};

export default overrides;
