import { useQuery } from '@apollo/client';
import { Box, withStyles } from '@material-ui/core';
import { ReactiveVars } from 'src/apollo';
import style from 'src/apps/houdaWaNour/style';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const Books: React.FC<TYPES.ClassesProps> = ({ classes }) => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);
  const { loading, error, data = { getBooks: [] } } = useQuery(Query.BOOK.BOOKS);

  if (error) ReactiveVars.alert({ error, open: true, severity: KEYS.error });

  return (
    <Box height="100%" overflow="auto">
      {loading && <Loader loading={loading} />}
      <View {...{ data: data.getBooks, filters }} />
    </Box>
  );
};

export default withStyles(style)(Books);
