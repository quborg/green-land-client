import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { ReactiveVars } from 'src/apollo';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const Sheikhs: React.FC = () => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);

  const { loading, error, data = { getSheikhs: [] } } = useQuery(Query.SHEIKH.SHEIKHS);

  if (error) ReactiveVars.alert({ error, open: true, severity: KEYS.error });

  return (
    <Box height="100%" overflow="auto">
      {loading && <Loader loading={loading} />}
      <View {...{ data: data.getSheikhs, filters }} />
    </Box>
  );
};

export default Sheikhs;
