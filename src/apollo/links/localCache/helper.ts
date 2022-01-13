import KEYS from 'src/defs/keys';

import {
  initBooksFilters,
  initCategoriesFilters,
  initChaptersFilters,
  initContentsFilters,
  initSheikhsFilters,
} from './initFilters';

export const dedupData = (fieldName: string, e: any, i: any): any[] => {
  const indexes: string[] = [];
  let ddD;
  if (fieldName === KEYS.getChapters) {
    const { data: ed = [] } = e as { data: string[] };
    const { data: id, count } = i;
    ddD = [...ed, ...id].filter((title) => {
      const notInclude = !indexes.includes(title);
      if (notInclude) indexes.push(title);
      return notInclude;
    });
    ddD = { data: ddD, count };
  } else if (fieldName === KEYS.getSheikhsChaptersByTitle) {
    const tmp = {};
    ddD = [];
    [...e, ...i].forEach(({ title, sheikhs }) => {
      if (title) tmp[title] = sheikhs;
    });
    Object.keys(tmp).forEach((title) => ddD.push({ title, sheikhs: tmp[title] }));
    return ddD;
  } else if (fieldName === KEYS.getChaptersSheikhByTitle) {
    const tmp = {};
    ddD = [];
    [...e, ...i].forEach(({ title, sheikh, chapters }) => {
      if (title && sheikh) tmp[[title, sheikh].join(',')] = chapters;
    });
    Object.keys(tmp).forEach((t_s) => {
      const title = t_s.split(',')[0];
      const sheikh = t_s.split(',')[1];
      ddD.push({ title, sheikh, chapters: tmp[t_s] });
    });
    return ddD;
  } else if (fieldName === KEYS.getContents) {
    const { data: ed = [] } = e as { data: any[] };
    const { data: id, count } = i;
    ddD = [...ed, ...id].filter(({ _id }) => {
      const notInclude = !indexes.includes(_id);
      if (notInclude) indexes.push(_id);
      return notInclude;
    });
    ddD = { data: ddD, count };
  } else
    ddD = [...e, ...i].filter(({ _id }) => {
      const notInclude = !indexes.includes(_id);
      if (notInclude) indexes.push(_id);
      return notInclude;
    });
  return ddD;
};

export const initDataFilters = (fieldName: string, data: TYPES.InitiableEntities): void => {
  if (fieldName === KEYS.getSheikhs) {
    initSheikhsFilters(data);
  }
  if (fieldName === KEYS.getBooks) {
    initBooksFilters(data);
  }
  if (fieldName === KEYS.getCategories) {
    initCategoriesFilters(data);
  }
  if (fieldName === KEYS.getChapters) {
    initChaptersFilters(data.count);
  }
  if (fieldName === KEYS.getContents) {
    initContentsFilters(data.count);
  }
};
