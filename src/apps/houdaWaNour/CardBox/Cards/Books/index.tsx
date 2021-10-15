import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { ReactiveVars } from 'src/apollo';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { Alert, Loader } from 'src/theme/components';

import View from './view';

const Books: React.FC = () => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);

  const { loading, error, data = { getBooks: [] } } = useQuery(Query.BOOK.BOOKS);
  const err = 'example error';

  if (error) return <Alert message={err} open severity={KEYS.error} />;

  return (
    <Box height="100%" overflow="auto">
      {loading && <Loader loading={loading} />}
      <View {...{ data: data.getBooks, filters }} />
    </Box>
  );
};

export default Books;
