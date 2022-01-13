import { Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  logoBox: {
    color: '#4d9312',
    fontFamily: '"Aref Ruqaa", serif',
    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
    textShadow: '0px 1px 10px #c3f708, 0px 1px 20px #c3f708, 0px 1px 0px #c3f708',
    minWidth: '170px',
    textAlign: 'center',
    marginRight: theme.spacing(2),
  },
});

export default style;
