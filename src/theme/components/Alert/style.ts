import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  progress: {
    height: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
    width: '100%',
    opacity: 0.05,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

export default style;
