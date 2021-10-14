import { Box, Container, withStyles } from '@material-ui/core';

import style from './style';

const Rslan: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Container className={classes.containerHeight} maxWidth="xl">
    <Box>Rslan</Box>
  </Container>
);

export default withStyles(style, { withTheme: true })(Rslan);
