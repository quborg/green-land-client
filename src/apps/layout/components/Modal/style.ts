import { Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    boxShadow: theme.shadows[23],
    padding: theme.spacing(2, 4),
  },
  controls: {
    '& button': {
      padding: '5px 30px',
    },
  },
  captcha: {
    '& .MuiInputBase-inputAdornedEnd': {
      borderRight: '1px solid rgba(0,0,0,0.23)',
    },
    '& button': { height: 24 },
  },
});

export default style;
