import LS from 'src/localStorage';
import rvls from 'src/rvls';

export const initSheikhsFilters = (data: SCHEMA.Sheikh[]): void => {
  const filters = LS.sheikhs.get();
  rvls(filters);
};

export const initBooksFilters = (data: SCHEMA.Book[]): void => {
  const filters = LS.books.get();
  rvls(filters);
};

export const initCategoriesFilters = (data: SCHEMA.Category[]): void => {
  const filters = LS.categories.get();
  rvls(filters);
};

export const initChaptersFilters = (count: number): void => {
  const filters = { ...LS.chapters.get(), count };
  rvls(filters);
};

export const initContentsFilters = (count: number): void => {
  const filters = { ...LS.contents.get(), count };
  rvls(filters);
};

export const initSearchFilters = (): void => {
  const filters = LS.search.get();
  rvls(filters);
};
