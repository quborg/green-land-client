import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  progress: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    opacity: 0.2,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'absolute',
    opacity: '0.2 !important',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default style;
