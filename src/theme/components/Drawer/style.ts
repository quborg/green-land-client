import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  drawer: {
    '& .MuiDrawer-paper': {
      width: '70%',
    },
  },
});

export default style;
