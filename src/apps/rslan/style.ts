import { Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  containerHeight: {
    height: `calc(100vh - ${theme.spacing(16 + 8)})`,
  },
});

export default style;
