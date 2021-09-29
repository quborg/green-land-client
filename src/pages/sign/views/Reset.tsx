import { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputAdornment,
  TextField,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import KEYS from 'src/defs/keys';
import { Mutation } from 'src/graphql';
import { reactiveAlert } from 'src/helpers';

import style from '../style';

const Reset: React.FC<TYPES.ClassesProps> = (props) => {
  const { classes } = props;
  const [inputs, setInputs] = useState<TYPES.ResetInputs>({});
  const [errors, setErrors] = useState<TYPES.ResetInputs>({});
  const [resetType, setResetType] = useState<'email' | 'sms'>('email');

  const [resetPassword, { loading, error }] = useMutation(Mutation.USER.RESET);

  useEffect(() => {
    if (error?.message) reactiveAlert(error.message, KEYS.error);
  }, [error]);

  const sendReset = (variables): void => {
    resetPassword({ variables })
      .then(({ data }) => {
        if (data) {
          reactiveAlert('Reset password was sent!', KEYS.success);
        }
      })
      .catch((err) => {
        reactiveAlert(err.message, KEYS.error);
      });
  };

  const handleEmailReset = (): void => {
    const { email } = inputs;
    if (!email) setErrors({ email: 'error' });
    else {
      const variables = { inputs: { email: inputs.email } };
      sendReset(variables);
    }
  };

  return (
    <>
      <Box className={classes.tabsReset} display="flex" my={2} width="1">
        <Button
          className={resetType === 'email' ? classes.flat : ''}
          color={resetType === 'email' ? 'primary' : 'secondary'}
          fullWidth
          onClick={() => setResetType('email')}
          startIcon={<Icons.AlternateEmail />}
          variant="contained">
          Email
        </Button>
        <Button
          className={resetType === 'sms' ? classes.flat : ''}
          color={resetType === 'sms' ? 'primary' : 'secondary'}
          fullWidth
          onClick={() => setResetType('sms')}
          startIcon={<Icons.Smartphone />}
          variant="contained">
          SMS
        </Button>
      </Box>
      <FormControl className={classes.field} fullWidth required>
        {resetType === 'email' && (
          <TextField
            autoComplete="email"
            autoFocus
            error={!!errors.email}
            helperText={!!errors.email && 'must not be empty <'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icons.AlternateEmail color="primary" />
                </InputAdornment>
              ),
            }}
            label="Email Address *"
            onChange={(e) => {
              setInputs({ email: e.target.value });
              setErrors({});
            }}
            value={inputs.email}
            variant="outlined"
          />
        )}
        {resetType === 'sms' && (
          <TextField
            autoComplete="phone"
            autoFocus
            error={!!errors.phone}
            helperText={!!errors.phone && 'must not be empty <'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icons.Smartphone color="primary" />
                </InputAdornment>
              ),
            }}
            label="Phone number *"
            onChange={(e) => {
              setInputs({ phone: e.target.value });
              setErrors({});
            }}
            value={inputs.phone}
            variant="outlined"
          />
        )}
      </FormControl>
      <Button
        className={classes.button}
        color="primary"
        disabled={loading || !!Object.keys(inputs).filter((key) => !inputs[key]).length}
        fullWidth
        onClick={handleEmailReset}
        variant="contained">
        {`Send ${resetType}`}
      </Button>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default withStyles(style)(Reset);
