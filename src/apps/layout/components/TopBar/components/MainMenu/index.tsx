import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Box, ListItem, ListItemText } from '@mui/material';
import { withStyles } from '@mui/styles';
import KEYS from 'src/defs/keys';
import { ROUTES } from 'src/router';
import { SendMail } from 'src/apps/layout/components';

import style from './style';

const MainMenu: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box display="flex" width="100%">
      {ROUTES.menuRoutes.map(({ key, to, Icon, label }) => (
        <NavLink
          className={classes.navLink}
          key={key}
          to={to}
          onClick={() => (key === KEYS.contactUs ? setOpen(true) : {})}>
          <ListItem button>
            <Icon />
            <ListItemText className={classes.listItemText} primary={label} />
          </ListItem>
        </NavLink>
      ))}
      <SendMail open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default withStyles(style)(MainMenu);
