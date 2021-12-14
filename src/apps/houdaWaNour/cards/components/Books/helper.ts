import { KEYS } from 'src/defs';

export const getNextAll = (
  all: boolean | string,
  nextSelected: { [_id: string]: boolean },
  data: SCHEMA.Book[]
): boolean | string => {
  const selectedLength = Object.keys(nextSelected).filter((id) => nextSelected[id]).length;
  let nextAll = all;
  if (!selectedLength) nextAll = false;
  else if (selectedLength < data.length) nextAll = KEYS.indeterminate;
  else nextAll = true;
  return nextAll;
};

export default {};
