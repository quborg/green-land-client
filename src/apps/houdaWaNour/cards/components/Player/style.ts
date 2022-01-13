import { lighten, Theme } from '@mui/material';
import { CONST } from 'src/defs';

const { bottomBar } = CONST.Theme.DIM.H;

const style = (theme: Theme): any => ({
  wrapper: {
    width: '100%',
    height: theme.spacing(bottomBar),
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow:
      '0px -2px 4px -1px rgb(0 0 0 / 20%),' +
      ' 0px -4px 5px 0px rgb(0 0 0 / 14%),' +
      ' 0px -1px 10px 0px rgb(0 0 0 / 12%)',
    '& div': {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    '& audio': {
      width: '100%',
      borderRadius: '30px',
    },
  },
});

export default style;
