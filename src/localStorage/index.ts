import { CONST, KEYS } from 'src/defs';

const { SEARCH, SHEIKHS, BOOKS, CATEGORIES, CONTENTS, CHAPTERS } =
  CONST.Apps.HoudaWaNour.Filters;

const search = {
  get: (): TYPES.SearchFilters => ({
    ...SEARCH,
    ...JSON.parse(localStorage.getItem(KEYS.searchFilters) || '{}'),
  }),
  set: (filters: TYPES.SearchFilters): void => {
    localStorage.setItem(KEYS.searchFilters, JSON.stringify({ ...SEARCH, ...filters }));
  },
};

const sheikhs = {
  get: (): TYPES.SheikhsFilters => ({
    ...SHEIKHS,
    ...JSON.parse(localStorage.getItem(KEYS.sheikhsFilters) || '{}'),
  }),
  set: (filters: TYPES.SheikhsFilters): void => {
    localStorage.setItem(KEYS.sheikhsFilters, JSON.stringify({ ...SHEIKHS, ...filters }));
  },
};

const books = {
  get: (): TYPES.BooksFilters => ({
    ...BOOKS,
    ...JSON.parse(localStorage.getItem(KEYS.booksFilters) || '{}'),
  }),
  set: (filters: TYPES.BooksFilters): void => {
    localStorage.setItem(KEYS.booksFilters, JSON.stringify({ ...BOOKS, ...filters }));
  },
};

const categories = {
  get: (): TYPES.CategoriesFilters => ({
    ...CATEGORIES,
    ...JSON.parse(localStorage.getItem(KEYS.categoriesFilters) || '{}'),
  }),
  set: (filters: TYPES.CategoriesFilters): void => {
    localStorage.setItem(
      KEYS.categoriesFilters,
      JSON.stringify({ ...CATEGORIES, ...filters })
    );
  },
};

const contents = {
  get: (): TYPES.ContentsFilters => ({
    ...CONTENTS,
    ...JSON.parse(localStorage.getItem(KEYS.contentsFilters) || '{}'),
  }),
  set: (filters: TYPES.ContentsFilters): void => {
    localStorage.setItem(KEYS.contentsFilters, JSON.stringify({ ...CONTENTS, ...filters }));
  },
};

const chapters = {
  get: (): TYPES.ChaptersFilters => ({
    ...CHAPTERS,
    ...JSON.parse(localStorage.getItem(KEYS.chaptersFilters) || '{}'),
  }),
  set: (filters: TYPES.ChaptersFilters): void => {
    localStorage.setItem(KEYS.chaptersFilters, JSON.stringify({ ...CHAPTERS, ...filters }));
  },
};

export default {
  search,
  sheikhs,
  books,
  categories,
  contents,
  chapters,
};
