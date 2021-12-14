import { Box, Container, withStyles } from '@material-ui/core';
import { CONST } from 'src/defs';
import { ROUTES, RoutesBuilder } from 'src/router';

import { TopBar } from './components';
import style from './style';

const { topBar, topSpace, bottomSpace } = CONST.Theme.DIM.H;

const Layout: React.FC<TYPES.LayoutProps> = ({ classes, theme }) => (
  <Container className="GuttersNone" component="main" maxWidth="xl">
    <TopBar />
    <Box height={theme.spacing(topBar + topSpace)} />
    <Container className={classes.containerHeight} maxWidth="xl">
      <Container maxWidth="xl">
        <RoutesBuilder routes={ROUTES.menuRoutes} />
      </Container>
    </Container>
    <Box height={theme.spacing(bottomSpace)} />
  </Container>
);

export default withStyles(style, { withTheme: true })(Layout);
