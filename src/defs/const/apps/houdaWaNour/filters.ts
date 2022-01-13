import KEYS from 'src/defs/keys';

export const SEARCH: TYPES.SearchFilters = {
  cardName: KEYS.search,
  keyword: '',
  method: 'any',
  in: 'indexing',
  exclude: '',
  fatwasOnly: false,
};

export const SHEIKHS: TYPES.SheikhsFilters = {
  cardName: KEYS.sheikhs,
  selectableAll: true,
  all: false,
  selected: {},
};

export const BOOKS: TYPES.BooksFilters = {
  cardName: KEYS.books,
  selectableAll: true,
  all: false,
  selected: {},
  searchableItems: true,
  openSearch: false,
  keyword: '',
};

export const CATEGORIES: TYPES.CategoriesFilters = {
  cardName: KEYS.categories,
  selectableAll: true,
  all: false,
  selected: {},
  expanded: {},
  parents: [0],
  expendedId: '',
};

export const CHAPTERS: TYPES.ChaptersFilters = {
  cardName: KEYS.chapters,
  selected: {},
  expanded: {},
  chapter: {},
  selectableAll: true,
  all: false,
  searchableItems: true,
  openSearch: false,
  keyword: '',
  count: 0,
};

export const CONTENTS: TYPES.ContentsFilters = {
  cardName: KEYS.contents,
  count: 0,
  selected: {},
};

export const CONTENT_VIEW: TYPES.ContentViewFilters = {
  cardName: KEYS.contentView,
  selected: {},
};
