import { Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  expandableButton: {
    '&:hover': {
      '& svg': {
        color: theme.palette.info.main,
      },
    },
  },
});

export default style;
