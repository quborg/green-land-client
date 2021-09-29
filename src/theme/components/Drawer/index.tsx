import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Drawer as MuiDrawer, withStyles } from '@material-ui/core';

import style from './style';

const Drawer: React.FC<TYPES.ClassesProps> = ({ classes, children }) => {
  const [open, setOpen] = useState(true);
  const history = useHistory();

  return (
    <MuiDrawer
      anchor="right"
      className={classes.drawer}
      onClose={() => {
        setOpen(false);
        history.goBack();
      }}
      open={open}>
      {children}
    </MuiDrawer>
  );
};

export default withStyles(style)(Drawer);
