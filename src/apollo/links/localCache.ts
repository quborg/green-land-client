import { FieldPolicy, InMemoryCache } from '@apollo/client';
import { ReactiveVars } from 'src/apollo';
import { KEYS } from 'src/defs';
import { reactiveFilters } from 'src/helpers';

const fieldToFilterName = {
  [KEYS.getSheikhs]: KEYS.sheikhs,
  [KEYS.getBooks]: KEYS.books,
  [KEYS.getCategories]: KEYS.categories,
};

const initFilters = (fieldName: string, data: TYPES.SelectableEntities): void => {
  if (Object.keys(fieldToFilterName).includes(fieldName)) {
    const cName = fieldToFilterName[fieldName];
    let nextFilters = ReactiveVars.filters();
    const {
      [cName]: { selected = {}, all, expanded = {} },
      ...filters
    } = nextFilters;
    const selectedLength = Object.keys(selected).length;
    const expandedLength = Object.keys(expanded).length;
    if (selectedLength < data.length || expandedLength < data.length) {
      const nextSelected = {};
      const nextExpanded = {};
      data.forEach(({ _id }) => {
        nextSelected[_id] = selected[_id] || false;
        nextExpanded[_id] = expanded[_id] || false;
      });
      nextFilters = {
        ...filters,
        [cName]: {
          all,
          selected: nextSelected,
          ...(cName === KEYS.categories && { expanded: nextExpanded }),
        },
      };
    }
    reactiveFilters(nextFilters);
  }
};

const initData = (fieldName: string, data: TYPES.SelectableEntities): void => {
  if (fieldToFilterName[fieldName] === KEYS.categories) ReactiveVars.data(data);
};

const dedupData = (e: any[], i: any[]): any[] => {
  let indexes = {};
  const ddD = [...e, ...i].filter(({ _id }) => {
    const notInclude = !Object.keys(indexes).includes(_id);
    indexes = { ...indexes, _id };
    return notInclude;
  });
  return ddD;
};

const cachePolicies: FieldPolicy = {
  keyArgs: false,
  merge: (existing = [], incoming = [], { fieldName }) => {
    const data = dedupData(existing, incoming);
    initFilters(fieldName, data);
    initData(fieldName, data);
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
        filters: {
          read: () => ReactiveVars.filters(),
        },
        alert: {
          read: () => ReactiveVars.alert(),
        },
        action: {
          read: () => ReactiveVars.action(),
        },
        inputsErrors: {
          read: () => ReactiveVars.inputsErrors(),
        },
        data: {
          read: () => ReactiveVars.data(),
        },
      },
    },
  },
});

export default localCache;
