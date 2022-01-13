import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { toast } from 'material-react-toastify';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import { LIMIT } from 'src/defs/const/gql';
import { Query, State } from 'src/graphql';
import RVLS from 'src/rvls';
import { Loader } from 'src/theme/components';

import {
  getBooksStateChanges,
  getCategoriesStateChanges,
  getSheikhsStateChanges,
} from './helper';
import View from './view';

const Chapters: React.FC = () => {
  const [page, setPage] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [
    {
      data: { getChaptersFilters: chaptersFilters },
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
  ] = [
    useQuery(State.GET_CHAPTERS_FILTERS),
    useQuery(State.GET_SHEIKHS_FILTERS),
    useQuery(State.GET_CATEGORIES_FILTERS),
    useQuery(State.GET_BOOKS_FILTERS),
  ];

  const [filters, setFilters] = useState({
    keyword: chaptersFilters.keyword,
    sheikhs: Object.keys(sheikhs).filter((id) => sheikhs[id]),
    categories: Object.keys(categories).filter((id) => categories[id]),
    books: Object.keys(books).filter((id) => books[id]),
  });

  const {
    loading,
    networkStatus,
    error,
    data = { getChapters: { data: [], count: 0 } },
    refetch,
    fetchMore,
  } = useQuery(Query.CHAPTER.CHAPTERS, {
    variables: { args: filters },
    notifyOnNetworkStatusChange: true,
  });

  toast.error(error);

  useEffect(() => {
    const isKeywordChanges = filters.keyword !== chaptersFilters.keyword;
    const { isSheikhsChanges, sheikhsArray } = getSheikhsStateChanges(sheikhs, filters);
    const { isCategoriesChanges, categoriesArray } = getCategoriesStateChanges(
      categories,
      filters
    );
    const { isBooksChanges, booksArray } = getBooksStateChanges(books, filters);
    if (isKeywordChanges || isSheikhsChanges || isCategoriesChanges || isBooksChanges) {
      setFilters({
        keyword: chaptersFilters.keyword,
        sheikhs: sheikhsArray,
        categories: categoriesArray,
        books: booksArray,
      });
      RVLS({ ...chaptersFilters, all: false, selected: {}, expanded: {}, chapter: {} });
      refetch({
        args: {
          keyword: chaptersFilters.keyword,
          sheikhs: sheikhsArray,
          categories: categoriesArray,
          books: booksArray,
        },
      });
      setPage(1);
    }
  }, [filters, chaptersFilters, sheikhs, categories, books, refetch]);

  useEffect(() => {
    const nextDataLength = data.getChapters.data.length;
    const nextPage = Math.floor(nextDataLength / LIMIT);
    if (nextDataLength !== dataLength) setDataLength(nextDataLength);
    if (nextPage !== page) setPage(nextPage);
  }, [data, dataLength, page]);

  const loadMore = (): void => {
    if (!loading && data.getChapters.count >= dataLength)
      fetchMore({
        variables: { args: { start: page * LIMIT, ...filters } },
      });
  };

  return (
    <CardWrapper {...{ filters: chaptersFilters, loadMore, dataLength }}>
      <Box height="100%">
        {loading && networkStatus === 1 && <Loader loading={loading} />}
        <View {...{ titles: data.getChapters.data, filters: chaptersFilters }} />
      </Box>
    </CardWrapper>
  );
};

export default Chapters;
