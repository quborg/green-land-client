import { NavLink } from 'react-router-dom';

import { Box, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { ROUTES } from 'src/router';

import style from './style';

const MainMenu: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Box display="flex">
    {ROUTES.mainRoutes
      .filter(({ menu }) => menu)
      .map(({ key, path: to, Icon, label }) => (
        <NavLink className={classes.navLink} key={key} to={to}>
          <ListItem button>
            <Icon />
            <ListItemText className={classes.listItemText} primary={label} />
          </ListItem>
        </NavLink>
      ))}
  </Box>
);

export default withStyles(style)(MainMenu);
