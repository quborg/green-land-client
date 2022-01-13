import { AppBar, Toolbar } from '@mui/material';

import { withStyles } from '@mui/styles';

import { Logo, MainMenu } from './components';
import style from './style';

const TopBar: React.FC<TYPES.TopBarProps> = ({ classes }) => (
  <AppBar className={classes.appBar} sx={{ justifyContent: 'center' }}>
    <Toolbar sx={{ justifyContent: 'center' }}>
      <Logo />
      <MainMenu />
    </Toolbar>
  </AppBar>
);

export default withStyles(style, { withTheme: true })(TopBar);
