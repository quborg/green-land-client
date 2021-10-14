import {
  Backdrop,
  Box,
  CircularProgress,
  LinearProgress,
  withStyles,
} from '@material-ui/core';

import style from './style';

const Loader: React.FC<TYPES.LoaderProps> = ({ loading, classes }) =>
  loading ? (
    <Box position="relative">
      <LinearProgress className={classes.progress} color="secondary" />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  ) : (
    <></>
  );

export default withStyles(style)(Loader);
