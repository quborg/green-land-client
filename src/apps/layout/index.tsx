import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';
import { withStyles } from '@mui/styles';
import { CONST } from 'src/defs';

import { TopBar } from './components';
import style from './style';

const { topBar, topSpace } = CONST.Theme.DIM.H;

const Layout: React.FC<TYPES.LayoutProps> = ({ children, classes, theme }) => (
  <Container className="GuttersNone" component="main" maxWidth="xl" dir="rtl">
    <TopBar />
    <Box display="flex" flexDirection="column" height={theme.spacing(topBar + topSpace)}>
      <Box className={classes.version} mt="auto" height={theme.spacing(topSpace)}>
        إصدار 2021-08-29
      </Box>
    </Box>
    <Container className={classes.containerLayout} maxWidth="xl" dir="ltr">
      <Box dir="rtl">
        <Outlet />
      </Box>
    </Container>
  </Container>
);

export default withStyles(style, { withTheme: true })(Layout);
