import { useEffect, useState } from 'react';

import { Snackbar } from '@material-ui/core';
import { Alert as MuiAlert } from '@material-ui/lab';

const Alert: React.FC<TYPES.AlertProps> = ({
  open: openProp,
  message: messageProp,
  severity,
  variant,
  elevation,
  autoHideDuration,
}) => {
  const [open, setOpen] = useState(openProp);
  const [message, setMessage] = useState(messageProp);

  // useEffect(() => {
  //   if (openProp !== open) setOpen(openProp);
  // }, [openProp, open, setOpen]);

  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <Snackbar autoHideDuration={autoHideDuration} onClose={onClose} open={open}>
      <MuiAlert elevation={elevation} onClose={onClose} severity={severity} variant={variant}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

Alert.defaultProps = {
  open: false,
  message: '',
  severity: 'info',
  elevation: 6,
  variant: 'filled',
  autoHideDuration: 50000,
};

export default Alert;
