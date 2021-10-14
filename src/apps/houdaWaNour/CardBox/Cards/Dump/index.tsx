import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { ReactiveVars } from 'src/apollo';
import { Query } from 'src/graphql';

const Dump: React.FC = () => {
  // const { loading, error, data = { getBooks: [] } } = useQuery(Query.BOOK.BOOKS);
  // if (error) ReactiveVars.alert({ error, open: true, severity: KEYS.error });
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
