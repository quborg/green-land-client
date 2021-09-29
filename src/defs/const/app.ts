export const FILTERS: TYPES.FiltersProps = {
  search: {
    keyword: '',
    method: 'any',
    in: 'indexing',
    exclude: '',
    fatwasOnly: false,
  },
  sheikhs: { all: false, selected: {} },
  categories: { all: false, selected: {}, expanded: {} },
  books: { all: false, selected: {} },
  default: '',
};

export default {};
