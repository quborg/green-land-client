import { Box, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

import style from './style';

const Logo: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Typography component="h6" variant="h6">
    <Box className={classes.logoBox}>الربوة الخضراء</Box>
  </Typography>
);

export default withStyles(style)(Logo);
