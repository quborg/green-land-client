import { Box, Container } from '@mui/material';

import { withStyles } from '@mui/styles';

import style from './style';

const Rslan: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Container className={classes.containerHeight} maxWidth="xl">
    <Box>Rslan</Box>
  </Container>
);

export default withStyles(style, { withTheme: true })(Rslan);
