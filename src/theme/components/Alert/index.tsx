import { FC, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import {
  Backdrop,
  CircularProgress,
  LinearProgress,
  Snackbar,
  withStyles,
} from '@material-ui/core';
import { Alert as MuiAlert } from '@material-ui/lab';
import { ReactiveVars } from 'src/apollo';
import { KEYS } from 'src/defs';
import { State } from 'src/graphql';
import { PATHS } from 'src/router';

import style from './style';

const Alert: FC<TYPES.AlertProps> = ({
  autoHideDuration,
  open: openProp,
  message: msgProp,
  error,
  severity: severityProp,
  variant,
  elevation,
  loading: loadingProp,
  classes,
}) => {
  const { data } = useQuery(State.ALERT);
  const [open, setOpen] = useState(openProp);
  const [loading, setLoading] = useState(loadingProp);
  const [message, setMessage] = useState(msgProp);
  const [severity, setSeverity] = useState(severityProp);
  const [expired, setExpired] = useState(false);
  const onClose = (): void => {
    ReactiveVars.alert({});
    setOpen(false);
  };

  useEffect(() => {
    const { alert } = data;
    if (loading !== alert.loading) setLoading(alert.loading);
  }, [data, loading, setLoading]);

  useEffect(() => {
    if (error?.message && message !== error?.message) {
      if (!localStorage.getItem(KEYS.token)) setExpired(true);
      setOpen(openProp);
      setMessage(error.message);
      setSeverity('error');
    }
  }, [error, message, openProp, setOpen, setSeverity, setExpired]);

  useEffect(() => {
    const { alert } = data;
    if (alert.message && typeof alert.message === 'string' && message !== alert.message) {
      setOpen(alert.open);
      setMessage(alert.message);
      setSeverity(alert.severity);
    }
  }, [data, message, setOpen, setMessage, setSeverity]);

  if (expired) return <Redirect to={PATHS.SIGN} />;

  if (loading) {
    return (
      <>
        <LinearProgress className={classes.progress} color="secondary" />
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    );
  }

  return (
    <Snackbar {...{ autoHideDuration, onClose, open, message }}>
      <MuiAlert {...{ elevation, onClose, open, severity, variant }}>{message}</MuiAlert>
    </Snackbar>
  );
};

Alert.defaultProps = {
  autoHideDuration: 5000,
  elevation: 6,
  variant: 'filled',
  severity: 'info',
  open: false,
};

export default withStyles(style)(Alert);
