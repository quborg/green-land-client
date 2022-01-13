import { Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  navLink: {
    textDecoration: 'none',
    color: 'white',
    textShadow: '0 1px 1px #77b343',
    '& span': {
      fontSize: 'clamp(0.7rem, 2.5vw, 1rem)',
    },
    '& svg': {
      fontSize: 'clamp(1.1rem, 4vw, 1.9rem)',
      marginRight: theme.spacing(1),
    },
    '&:first-child': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '&:last-child': {
      marginLeft: 'auto',
    },
  },
});

export default style;
