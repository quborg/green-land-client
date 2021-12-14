import { FieldPolicy, InMemoryCache } from '@apollo/client';
import { RV } from 'src/apollo';

import { dedupData, initDataFilters } from './helper';

const cachePolicies: FieldPolicy = {
  keyArgs: false,
  merge: (existing = [], incoming = [], { fieldName }) => {
    const data = dedupData(fieldName, existing, incoming);
    initDataFilters(fieldName, data);
    return data;
  },
};

const localCache = new InMemoryCache({
  addTypename: false,
  typePolicies: {
    Query: {
      fields: {
        getCategories: cachePolicies,
        getBooks: cachePolicies,
        getSheikhs: cachePolicies,
        getContents: cachePolicies,
        getChapters: cachePolicies,
        getChaptersByTitle: cachePolicies,
        getSearchFilters: {
          read: () => RV.filters.search(),
        },
        getSheikhsFilters: {
          read: () => RV.filters.sheikhs(),
        },
        getBooksFilters: {
          read: () => RV.filters.books(),
        },
        getCategoriesFilters: {
          read: () => RV.filters.categories(),
        },
        getChaptersFilters: {
          read: () => RV.filters.chapters(),
        },
        getContentsFilters: {
          read: () => RV.filters.contents(),
        },
      },
    },
  },
});

export default localCache;
