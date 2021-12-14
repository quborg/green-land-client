import { RV } from 'src/apollo';
import LS from 'src/localStorage';

const rvls = (filters: TYPES.FiltersProps): void => {
  RV.filters[filters.cardName](filters);
  LS[filters.cardName].set(filters);
};

export default rvls;
