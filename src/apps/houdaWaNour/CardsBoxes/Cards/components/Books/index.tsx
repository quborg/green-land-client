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

  const { loading, error, data = { getBooks: [] } } = useQuery(Query.BOOK.BOOKS);

  toast.error(error);

  return (
    <Box>
      {loading && <Loader loading={loading} />}
      <View {...{ data: data.getBooks, filters }} />
    </Box>
  );
};

export default Books;
