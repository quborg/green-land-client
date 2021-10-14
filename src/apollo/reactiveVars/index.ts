import { makeVar, ReactiveVar } from '@apollo/client';
import { getLocalFilters } from 'src/helpers';

const action: ReactiveVar<SCHEMA.ReactiveAction | any> = makeVar<SCHEMA.ReactiveAction>(
  <SCHEMA.ReactiveAction>{}
);

const alert: ReactiveVar<TYPES.AlertProps | any> = makeVar<TYPES.AlertProps>(
  <TYPES.AlertProps>{}
);

const inputsErrors: ReactiveVar<TYPES.IErrorsContext['errors'] | any> = makeVar<
  TYPES.IErrorsContext['errors']
>(<TYPES.IErrorsContext['errors']>{});

const filters: ReactiveVar<TYPES.FiltersProps | any> = makeVar<TYPES.FiltersProps>(
  <TYPES.FiltersProps>getLocalFilters()
);

const data: ReactiveVar<TYPES.DataProps | any> = makeVar<TYPES.DataProps>(<TYPES.DataProps>{
  categories: [],
});

export default {
  action,
  alert,
  filters,
  data,
  inputsErrors,
};
