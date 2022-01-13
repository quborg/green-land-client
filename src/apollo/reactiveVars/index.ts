import { makeVar, ReactiveVar } from '@apollo/client';
import LS from 'src/localStorage';

const search: ReactiveVar<TYPES.SearchFilters> = makeVar<TYPES.SearchFilters>(LS.search.get());

const sheikhs: ReactiveVar<TYPES.SheikhsFilters> = makeVar<TYPES.SheikhsFilters>(
  LS.sheikhs.get()
);

const books: ReactiveVar<TYPES.BooksFilters> = makeVar<TYPES.BooksFilters>(LS.books.get());

const categories: ReactiveVar<TYPES.CategoriesFilters> = makeVar<TYPES.CategoriesFilters>(
  LS.categories.get()
);

const contents: ReactiveVar<TYPES.ContentsFilters> = makeVar<TYPES.ContentsFilters>(
  LS.contents.get()
);

const chapters: ReactiveVar<TYPES.ChaptersFilters> = makeVar<TYPES.ChaptersFilters>(
  LS.chapters.get()
);

export default {
  filters: {
    search,
    sheikhs,
    books,
    categories,
    contents,
    chapters,
  },
};
