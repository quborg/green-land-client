import { useState } from 'react';

import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog as MuiDialog,
} from '@material-ui/core';

import dialogs from './dialogs';
import TransitionSlide from './TransitionSlide';

const Dialog: React.FC<TYPES.DialogProps> = ({
  open = false,
  context = 'default',
  confirmation = () => {},
}) => {
  const [dialogContext] = useState(dialogs[context]);

  return (
    <MuiDialog
      aria-describedby="dialog-description"
      aria-labelledby="dialog-label"
      keepMounted
      onClose={() => confirmation(false)}
      open={open}
      TransitionComponent={TransitionSlide}>
      <DialogTitle id="dialog-label">{dialogContext.label}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          {dialogContext.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => confirmation(false)}>
          Disagree
        </Button>
        <Button
          color="primary"
          onClick={() => confirmation(true)}
          startIcon={<dialogContext.Icon />}>
          Agree
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
