import { Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  wrapper: {
    color: theme.palette.common.gray,
    marginLeft: theme.spacing(2),
    opacity: 0.7,
    '& svg': {
      fontSize: '1rem',
    },
    '& .MuiBreadcrumbs-separator svg': {
      fontSize: '0.8rem',
    },
    '& span': {
      fontSize: '0.7em',
      marginLeft: theme.spacing(0.5),
      textTransform: 'capitalize',
    },
    '& div:first-child': {
      cursor: 'pointer',
    },
  },
});

export default style;
