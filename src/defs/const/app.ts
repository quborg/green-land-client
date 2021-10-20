export const FILTERS: TYPES.FiltersProps = {
  search: {
    keyword: '',
    method: 'any',
    in: 'indexing',
    exclude: '',
    fatwasOnly: false,
  },
  sheikhs: { all: false, selected: {}, expanded: {}, keyword: '', openSearch: false },
  categories: { all: false, selected: {}, expanded: {}, keyword: '', openSearch: false },
  books: { all: false, selected: {}, keyword: '', openSearch: false },
  default: '',
};

export const DIM = {
  H: {
    topBar: 8,
    topSpace: 8,
    bottomSpace: 8,
  },
};
