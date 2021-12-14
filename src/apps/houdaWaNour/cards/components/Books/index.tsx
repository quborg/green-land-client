import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { toast } from 'material-react-toastify';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const Books: React.FC = () => {
  const {
    data: { getBooksFilters: filters },
  } = useQuery(State.GET_BOOKS_FILTERS);

  const [keyword, setKeyword] = useState(filters.keyword);

  const {
    loading,
    error,
    data = { getBooks: [] },
    refetch,
  } = useQuery(Query.BOOK.BOOKS, {
    variables: { args: { keyword } },
  });

  toast.error(error);

  useEffect(() => {
    if (keyword !== filters.keyword) {
      setKeyword(filters.keyword);
      refetch({ args: { keyword: filters.keyword } });
    }
  }, [keyword, filters, refetch]);

  return (
    <CardWrapper filters={filters}>
      <Box height="100%">
        {loading && <Loader loading={loading} />}
        <View {...{ data: data.getBooks, filters }} />
      </Box>
    </CardWrapper>
  );
};

export default Books;
