import { ApolloError } from '@apollo/client';
import { Color } from '@material-ui/lab';
import jwt from 'jsonwebtoken';
import { ReactiveVars } from 'src/apollo';
import { CONST } from 'src/defs';

export const reactiveAlert = (
  message: string | boolean | ApolloError,
  severity?: Color,
  open = true
): void => {
  if (typeof message === 'boolean') ReactiveVars.alert({ loading: true });
  if (typeof message === 'object') ReactiveVars.alert({ error: message });
  ReactiveVars.alert({ message, open, severity });
};

export const reactiveFilters = (filters: TYPES.FiltersProps): void => {
  ReactiveVars.filters(filters);
  localStorage.setItem('filters', JSON.stringify(filters));
};

export const localFilters = (): TYPES.FiltersProps => {
  const filters = {
    ...CONST.App.FILTERS,
    ...JSON.parse(localStorage.getItem('filters') || '{}'),
  };
  return filters;
};

export const isTokenValid = (): boolean => {
  let valid = true;
  try {
    const { token } = JSON.parse(<string>localStorage.getItem('user'));
    const payload = jwt.verify(token, CONST.Apollo.SECRET_CODE);
    console.log('payload', payload);
  } catch (error) {
    valid = false;
    const message = error?.message || 'Token error';
    reactiveAlert(message, 'error');
  }
  return valid;
};

export const capitalize = (W: string): string => W.charAt(0).toUpperCase() + W.slice(1);

export const validateEmptyForm = (inputs: TYPES.FormsInputs): TYPES.IErrorsContext['errors'] =>
  Object.keys(inputs).reduce(
    (e, k) => ({
      ...e,
      [k]: inputs[k] ? '' : `Empty ${capitalize(k)} field. Must not !`,
      flag: e.flag || !inputs[k],
    }),
    { flag: false }
  );
