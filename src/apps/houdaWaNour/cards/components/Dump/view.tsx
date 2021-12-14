import { Box, withStyles } from '@material-ui/core';

import style from '../style';

const ContentViewView: React.FC<TYPES.ContentViewViewProps> = ({ classes, data }) => (
  <Box>
    <Box className={classes.paper} mx={2} my={1} px={2}>
      {data?.write}
    </Box>
  </Box>
);

export default withStyles(style)(ContentViewView);
