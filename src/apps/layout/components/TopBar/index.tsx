import { AppBar, Toolbar, withStyles } from '@material-ui/core';

import { Logo, MainMenu } from './components';
import style from './style';

const TopBar: React.FC<TYPES.TopBarProps> = ({ classes }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Logo />
      <MainMenu />
    </Toolbar>
  </AppBar>
);

export default withStyles(style, { withTheme: true })(TopBar);
