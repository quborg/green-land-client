import { KEYS } from 'src/defs';

export const unselectParents = (
  id: string,
  nextSelected: { [_id: string]: boolean },
  data: SCHEMA.Category[]
): { [_id: string]: boolean } => {
  const nextSelectedCopy = nextSelected;
  const recursiveUnselectParent = (nId: string): void => {
    const itemData = data.filter(({ _id }) => nId === _id)[0];
    data.forEach(({ _id, ID }) => {
      if (itemData.parent === ID) {
        nextSelectedCopy[_id] = false;
        recursiveUnselectParent(_id);
      }
    });
  };
  recursiveUnselectParent(id);
  return nextSelectedCopy;
};

export const unselectChildren = (
  id: string,
  nextSelected: { [_id: string]: boolean },
  data: SCHEMA.Category[]
): { [_id: string]: boolean } => {
  const nextSelectedCopy = nextSelected;
  const recursiveUnselectChildren = (nId: string): void => {
    const itemData = data.filter(({ _id }) => nId === _id)[0];
    data.forEach(({ _id, parent }) => {
      if (itemData.ID === parent) {
        nextSelectedCopy[_id] = false;
        recursiveUnselectChildren(_id);
      }
    });
  };
  recursiveUnselectChildren(id);
  return nextSelectedCopy;
};

export const getCheckboxStateAll = (
  all: boolean | string,
  nextSelected: {
    [_id: string]: boolean;
  },
  data: SCHEMA.Category[]
): boolean | string => {
  const dataParents0 = data.filter(({ parent }) => parent === 0);
  const dataParents0Selected = dataParents0.filter(({ _id }) => nextSelected[_id]);
  const nextSelectedLength = Object.keys(nextSelected).filter((id) => nextSelected[id]).length;
  let nextAll = all;
  if (!nextSelectedLength) nextAll = false;
  else if (dataParents0Selected < dataParents0) nextAll = KEYS.indeterminate;
  else nextAll = true;
  return nextAll;
};

export const compare2arrays = (a: Array<number>, b: Array<number>): boolean =>
  a.length === b.length && !a.filter((e) => !b.includes(e)).length;
