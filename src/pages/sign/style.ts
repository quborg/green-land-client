import { fade, lighten, Theme } from '@material-ui/core';

const duration = '500ms';
const lineHeight = 2.375;

const style = (theme: Theme): any => ({
  container: {
    backgroundColor: theme.palette.common.chocolate,
    boxShadow: theme.shadows[24],
    border: '1px solid',
    borderTop: 'none',
    borderBottom: 'none',
    borderColor: lighten(theme.palette.common.chocolate, 0.1),
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: { width: '100%' },
    backgroundColor: fade(theme.palette.common.olive, 0.9),
    border: '1px solid',
    borderColor: lighten(theme.palette.common.olive, 0.2),
  }),
  field: {
    marginTop: theme.spacing(3),
  },
  helperText: {
    display: 'block !important',
    height: 0,
  },
  '1-list': {
    height: theme.spacing(lineHeight),
  },
  '2-list': {
    height: theme.spacing(lineHeight * 2),
  },
  '3-list': {
    height: theme.spacing(lineHeight * 3),
  },
  '4-list': {
    height: theme.spacing(lineHeight * 4),
  },
  '5-list': {
    height: theme.spacing(lineHeight * 5),
  },
  button: { margin: theme.spacing(3, 0, 2) },
  footer: {},
  flat: {
    boxShadow: '0 0',
    '&:hover': {
      boxShadow: '0 0',
      cursor: 'inherit',
      backgroundColor: theme.palette.primary.main,
    },
  },
});

export default style;
