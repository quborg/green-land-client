import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  containerHeight: {
    height: `calc(100vh - ${theme.spacing(16 + 8)}px)`,
  },
});

export default style;
