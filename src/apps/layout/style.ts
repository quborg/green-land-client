import { Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  containerLayout: {
    height: `calc(100vh - ${theme.spacing(16 + 8)})`,
    overflow: 'hidden auto',
  },
  version: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: 'white',
    fontSize: '0.7rem',
    textShadow: '0 1px 3px black, 0 1px 6px black',
    width: '100%',
  },
});

export default style;
