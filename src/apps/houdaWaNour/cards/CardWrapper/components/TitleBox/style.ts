import { Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  badge: {
    marginLeft: theme.spacing(6),
    '& span': {
      backgroundColor: theme.palette.common.bisque,
    },
  },
});

export default style;
