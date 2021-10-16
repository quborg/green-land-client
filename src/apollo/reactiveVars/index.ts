import { makeVar, ReactiveVar } from '@apollo/client';
import { getLocalFilters } from 'src/helpers';

const filters: ReactiveVar<TYPES.FiltersProps | any> = makeVar<TYPES.FiltersProps>(
  <TYPES.FiltersProps>getLocalFilters()
);

export default {
  filters,
};
