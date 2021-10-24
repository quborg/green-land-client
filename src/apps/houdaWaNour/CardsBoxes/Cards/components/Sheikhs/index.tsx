import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { toast } from 'material-react-toastify';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const Sheikhs: React.FC = () => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);

  const { loading, error, data = { getSheikhs: [] } } = useQuery(Query.SHEIKH.SHEIKHS);

  toast.error(error);

  return (
    <Box>
      {loading && <Loader loading={loading} />}
      <View {...{ data: data.getSheikhs, filters }} />
    </Box>
  );
};

export default Sheikhs;
