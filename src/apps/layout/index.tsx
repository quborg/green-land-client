import { Box, Container, withStyles } from '@material-ui/core';
import { ROUTES, RoutesBuilder } from 'src/router';

import { TopBar } from './components';
import style from './style';

const Layout: React.FC<TYPES.LayoutProps> = ({ classes, theme }) => (
  <Container className="GuttersNone" component="main" maxWidth="xl">
    <TopBar />
    <Box height={theme.spacing(16)} />
    <Container className={classes.containerHeight} maxWidth="xl">
      <Container maxWidth="xl">
        <RoutesBuilder routes={ROUTES.menuRoutes} />
      </Container>
    </Container>
    <Box height={theme.spacing(8)} />
  </Container>
);

export default withStyles(style, { withTheme: true })(Layout);
