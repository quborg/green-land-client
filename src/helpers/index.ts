import { ReactiveVars } from 'src/apollo';
import { CONST } from 'src/defs';

export const setReactiveLocalFilters = (filters: TYPES.FiltersProps): void => {
  ReactiveVars.filters(filters);
  localStorage.setItem('filters', JSON.stringify(filters));
};

export const getLocalFilters = (): TYPES.FiltersProps => {
  const filters = {
    ...CONST.App.FILTERS,
    ...JSON.parse(localStorage.getItem('filters') || '{}'),
  };
  return filters;
};
