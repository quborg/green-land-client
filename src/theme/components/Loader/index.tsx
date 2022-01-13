import { Backdrop, Box, CircularProgress, LinearProgress } from '@mui/material';

import { withStyles } from '@mui/styles';

import style from './style';

const Loader: React.FC<TYPES.LoaderProps> = ({ loading, classes }) =>
  loading ? (
    <Box height="100%" position="relative">
      <LinearProgress color="primary" />
      <LinearProgress className={classes.progress} color="primary" />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  ) : (
    <></>
  );

export default withStyles(style)(Loader);
