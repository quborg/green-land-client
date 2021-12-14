import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { toast } from 'material-react-toastify';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import { LIMIT } from 'src/defs/const/gql';
import { Query, State } from 'src/graphql';
import RVLS from 'src/rvls';
import { Loader } from 'src/theme/components';

import {
  getBooksStateChanges,
  getCategoriesStateChanges,
  getChaptersStateChanges,
  getSheikhsStateChanges,
} from './helper';
import View from './view';

const Contents: React.FC = () => {
  const [page, setPage] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [
    {
      data: { getContentsFilters: contentsFilters },
    },
    {
      data: {
        getSearchFilters: { cardName, ...search },
      },
    },
    {
      data: {
        getSheikhsFilters: { selected: sheikhs },
      },
    },
    {
      data: {
        getCategoriesFilters: { selected: categories },
      },
    },
    {
      data: {
        getBooksFilters: { selected: books },
      },
    },
    {
      data: {
        getChaptersFilters: { selected: chapters, chapter },
      },
    },
  ] = [
    useQuery(State.GET_CONTENTS_FILTERS),
    useQuery(State.GET_SEARCH_FILTERS),
    useQuery(State.GET_SHEIKHS_FILTERS),
    useQuery(State.GET_CATEGORIES_FILTERS),
    useQuery(State.GET_BOOKS_FILTERS),
    useQuery(State.GET_CHAPTERS_FILTERS),
  ];

  const [filters, setFilters] = useState({
    ...search,
    sheikhs: Object.keys(sheikhs).filter((id) => sheikhs[id]),
    categories: Object.keys(categories).filter((id) => categories[id]),
    books: Object.keys(books).filter((id) => books[id]),
    chapters: Object.keys(chapters).filter((title) => chapters[title]),
    chapter: chapter._id,
  });

  const {
    loading,
    networkStatus,
    error,
    data = { getContents: { data: [], count: 0 } },
    refetch,
    fetchMore,
  } = useQuery(Query.CONTENT.CONTENTS, {
    variables: { args: filters },
    notifyOnNetworkStatusChange: true,
  });

  toast.error(error);

  useEffect(() => {
    const isSearchChanges = Object.keys(search).some((key) => filters[key] !== search[key]);
    const isChapterChanges = chapter._id !== filters.chapter;
    const { isSheikhsChanges, sheikhsArray } = getSheikhsStateChanges(sheikhs, filters);
    const { isCategoriesChanges, categoriesArray } = getCategoriesStateChanges(
      categories,
      filters
    );
    const { isBooksChanges, booksArray } = getBooksStateChanges(books, filters);
    const { isChaptersChanges, chaptersArray } = getChaptersStateChanges(chapters, filters);
    if (
      isSearchChanges ||
      isSheikhsChanges ||
      isCategoriesChanges ||
      isBooksChanges ||
      isChaptersChanges ||
      isChapterChanges
    ) {
      setFilters({
        ...search,
        sheikhs: sheikhsArray,
        categories: categoriesArray,
        books: booksArray,
        chapters: chaptersArray,
        chapter: chapter._id,
      });
      RVLS({ ...contentsFilters, selected: {} });
      refetch({
        args: {
          ...search,
          sheikhs: sheikhsArray,
          categories: categoriesArray,
          books: booksArray,
          chapters: chaptersArray,
          chapter: chapter._id,
        },
      });
      setPage(1);
    }
  }, [
    filters,
    contentsFilters,
    search,
    sheikhs,
    categories,
    books,
    chapters,
    chapter,
    refetch,
  ]);

  useEffect(() => {
    const nextDataLength = data.getContents.data.length;
    const nextPage = Math.floor(nextDataLength / LIMIT);
    if (nextDataLength !== dataLength) setDataLength(nextDataLength);
    if (nextPage !== page) setPage(nextPage);
  }, [data, dataLength, page]);

  const loadMore = (): void => {
    if (!loading && data.getContents.count >= dataLength)
      fetchMore({
        variables: { args: { start: page * LIMIT, ...filters } },
      });
  };

  return (
    <CardWrapper {...{ filters: contentsFilters, loadMore, dataLength }}>
      <Box height="100%">
        {loading && networkStatus === 1 && <Loader loading={loading} />}
        <View {...{ data: data.getContents.data, filters: contentsFilters }} />
      </Box>
    </CardWrapper>
  );
};

export default Contents;
