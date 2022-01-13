import { lighten, Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  advancedSearchBox: {
    backgroundColor: lighten(theme.palette.common.yellow, 0.6),
    '& legend, & span, & label': {
      fontSize: theme.typography.fontSize * 0.96,
    },
    '& textarea': {
      fontSize: theme.typography.fontSize,
    },
  },
  advancedSearchButton: {
    backgroundColor: lighten(theme.palette.common.gray, 0.8),
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
      backgroundColor: lighten(theme.palette.common.gray, 0.7),
    },
  },
  fatwasOnly: {
    marginLeft: '0 !important',
  },
});

export default style;
