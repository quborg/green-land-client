import { Box, Paper, Typography } from '@mui/material';

import { withStyles } from '@mui/styles';

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
