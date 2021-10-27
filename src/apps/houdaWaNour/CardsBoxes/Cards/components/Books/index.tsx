import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { toast } from 'material-react-toastify';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const Books: React.FC = () => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);

  const [title, setTitle] = useState((filters as TYPES.FiltersProps).books.keyword);

  const {
    loading,
    error,
    data = { getBooks: [] },
    refetch,
  } = useQuery(Query.BOOK.BOOKS, { variables: { args: { filters: { title } } } });

  toast.error(error);

  useEffect(() => {
    const nextTitle = (filters as TYPES.FiltersProps).books.keyword;
    if (title !== nextTitle) {
      setTitle(nextTitle);
      refetch({ args: { filters: { title: nextTitle } } });
    }
  }, [title, filters, refetch]);

  return (
    <Box height="100%">
      {loading && <Loader loading={loading} />}
      <View {...{ data: data.getBooks, filters }} />
    </Box>
  );
};

export default Books;
