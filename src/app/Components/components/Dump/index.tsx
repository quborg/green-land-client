import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { Query } from 'src/graphql';
import { reactiveAlert } from 'src/helpers';

const Dump: React.FC = () => {
  // const { loading, error, data = { getBooks: [] } } = useQuery(Query.BOOK.BOOKS);
  // reactiveAlert(loading);
  // if (error) reactiveAlert(error);
  console.log('dump');
  return (
    <Box height="100%" overflow="auto">
      Write Dump
      {/* {data?.getBooks?.map(({ _id, title }) => (
        <Box key={_id}>{title}</Box>
      ))} */}
    </Box>
  );
};

export default Dump;
