import { makeVar, ReactiveVar } from '@apollo/client';
import { getLocalFilters } from 'src/helpers';

const alert: ReactiveVar<TYPES.AlertProps | any> = makeVar<TYPES.AlertProps>(
  <TYPES.AlertProps>{}
);

const filters: ReactiveVar<TYPES.FiltersProps | any> = makeVar<TYPES.FiltersProps>(
  <TYPES.FiltersProps>getLocalFilters()
);

const data: ReactiveVar<TYPES.RvDataProps | any> = makeVar<TYPES.RvDataProps>(<
  TYPES.RvDataProps
>{
  categories: [],
});

export default {
  alert,
  filters,
  data,
};
