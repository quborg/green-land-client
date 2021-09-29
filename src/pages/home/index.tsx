import { Box, Paper, Typography, withStyles } from '@material-ui/core';

import style from './style';

const Home: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Box>
    <Box>
      <Typography component="h1" variant="h1">
        سلسلة الهدى والنور
      </Typography>
      <Paper>المستجدات والاخبار</Paper>
    </Box>
  </Box>
);

export default withStyles(style)(Home);
