import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { Button, withStyles } from '@material-ui/core';
import { CONST, KEYS } from 'src/defs';
import { Mutation, State } from 'src/graphql';
import { reactiveAlert, validateEmptyForm } from 'src/helpers';
import { PATHS } from 'src/router';

import style from '../style';
import Inputs from './Inputs';

const SignIn: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const [args, setArgs] = useState<TYPES.SignInArgs>(CONST.Pages.INIT_SIGN.IN);
  const [errors, setErrors] = useState<TYPES.SignErrors<TYPES.SignInArgs>>({ flag: false });
  const [isLogged, setIsLogged] = useState(false);

  const [signIn, { loading }] = useMutation(Mutation.USER.SIGN_IN);
  const { data: asyncErrors } = useQuery(State.INPUTS_ERRORS);

  if (loading) reactiveAlert(true);

  useEffect(() => {
    if (asyncErrors?.inputsErrors?.flag) {
      setErrors(asyncErrors.inputsErrors);
    }
  }, [asyncErrors, setErrors]);

  const handleSignIn = (): void => {
    setErrors({ flag: false });
    const errorsState = validateEmptyForm(args);
    if (errorsState.flag) {
      setErrors(errorsState);
      reactiveAlert('Please correct the errors !', KEYS.error);
    } else {
      signIn({ variables: { args } })
        .then(({ data: { signIn: user = {} } }) => {
          if (user?.token) {
            reactiveAlert('Successful Sign in !', KEYS.success);
            setIsLogged(true);
            localStorage.setItem('user', JSON.stringify(user));
          } else reactiveAlert('Server failed !', KEYS.error);
        })
        .catch((err) => {
          reactiveAlert(err.message, KEYS.error);
        });
    }
  };

  return isLogged ? (
    <Redirect to={PATHS.APP} />
  ) : (
    <>
      <Inputs {...{ inputs: args, key: 'in', setInputs: setArgs, errors, setErrors }} />
      <Button
        className={classes.button}
        color="primary"
        disabled={loading}
        fullWidth
        onClick={handleSignIn}
        variant="contained">
        Login
      </Button>
    </>
  );
};

export default withStyles(style)(SignIn);
