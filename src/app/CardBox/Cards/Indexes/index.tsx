import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { Query } from 'src/graphql';
import { reactiveAlert } from 'src/helpers';

const Indexes: React.FC = () => {
  // const { loading, error, data = { getBooks: [] } } = useQuery(Query.BOOK.BOOKS);
  // reactiveAlert(loading);
  // if (error) reactiveAlert(error);
  console.log('indexes');
  return (
    <Box height="100%" overflow="auto">
      Indexes results
      {/* {data?.getBooks?.map(({ _id, title }) => (
        <Box key={_id}>{title}</Box>
      ))} */}
    </Box>
  );
};

export default Indexes;
