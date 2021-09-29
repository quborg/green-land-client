import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { CONST, KEYS } from 'src/defs';
import { State } from 'src/graphql';
import { capitalize } from 'src/helpers';

import style from '../style';

const Inputs: React.FC<TYPES.Inputs> = ({
  classes,
  inputs,
  key,
  setInputs,
  errors,
  setErrors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const { data } = useQuery(State.INPUTS_ERRORS);

  useEffect(() => {
    if (data?.inputsErrors?.flag && key === 'up') {
      setErrors(data.inputsErrors);
    }
  }, [data, key, setErrors]);

  const getErrorListClass = (inputName): string =>
    `${errors[inputName]?.split('!').length - 1}-list`;

  return (
    <>
      {Object.keys(inputs).map((inputName) => (
        <FormControl
          className={`${classes.field}${errors[inputName] ? ' Mui-error' : ''}`}
          fullWidth
          key={`${inputName}-sign-${key}-input-form-control`}
          required>
          <TextField
            autoComplete={inputName}
            error={!!errors[inputName]}
            fullWidth
            InputProps={
              inputName === KEYS.password
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}>
                          {showPassword ? <Icons.Visibility /> : <Icons.VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined
            }
            label={capitalize(inputName === 'name' ? 'full name' : inputName)}
            onChange={(e) => {
              setInputs({ ...inputs, [inputName]: e.target.value });
              setErrors({ ...errors, [inputName]: '' });
            }}
            required
            type={CONST.Pages.INPUT_TYPES[inputName](showPassword)}
            value={(inputs[inputName] && inputs[inputName]) || ''}
            variant="outlined"
          />
          <FormHelperText
            className={`${classes.helperText} list-errors ${
              classes[getErrorListClass(inputName)]
            }`}
            component="ul"
            error={!!errors[inputName]}
            variant="outlined">
            {errors[inputName] &&
              errors[inputName]
                .split('!')
                .filter((x) => x.trim())
                .map((text) => <li key={text}>{text}</li>)}
          </FormHelperText>
        </FormControl>
      ))}
    </>
  );
};

export default withStyles(style)(Inputs);
