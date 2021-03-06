export const getSheikhsStateChanges = (
  sheikhs,
  filters
): { isSheikhsChanges: boolean; sheikhsArray: string[] } => {
  const sheikhsArray = Object.keys(sheikhs).filter((id) => sheikhs[id]);
  const isSheikhsChanges =
    sheikhsArray.length !== filters.sheikhs.length ||
    sheikhsArray.some((id) => !filters.sheikhs.includes(id));
  return { isSheikhsChanges, sheikhsArray };
};

export const getCategoriesStateChanges = (
  categories,
  filters
): { isCategoriesChanges: boolean; categoriesArray: string[] } => {
  const categoriesArray = Object.keys(categories).filter((id) => categories[id]);
  const isCategoriesChanges =
    categoriesArray.length !== filters.categories.length ||
    categoriesArray.some((id) => !filters.categories.includes(id));
  return { isCategoriesChanges, categoriesArray };
};

export const getBooksStateChanges = (
  books,
  filters
): { isBooksChanges: boolean; booksArray: string[] } => {
  const booksArray = Object.keys(books).filter((id) => books[id]);
  const isBooksChanges =
    booksArray.length !== filters.books.length ||
    booksArray.some((id) => !filters.books.includes(id));
  return { isBooksChanges, booksArray };
};

export const getChaptersStateChanges = (
  chapters,
  filters
): { isChaptersChanges: boolean; chaptersArray: string[] } => {
  const chaptersArray = Object.keys(chapters).filter((title) => chapters[title]);
  const isChaptersChanges =
    chaptersArray.length !== filters.chapters.length ||
    chaptersArray.some((title) => !filters.chapters.includes(title));
  return { isChaptersChanges, chaptersArray };
};
