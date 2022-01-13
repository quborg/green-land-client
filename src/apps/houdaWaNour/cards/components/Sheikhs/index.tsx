import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { toast } from 'material-react-toastify';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const Sheikhs: React.FC = () => {
  const {
    data: { getSheikhsFilters: filters },
  } = useQuery(State.GET_SHEIKHS_FILTERS);

  const { loading, error, data = { getSheikhs: [] } } = useQuery(Query.SHEIKH.SHEIKHS);

  toast.error(error);

  return (
    <CardWrapper filters={filters}>
      <Box height="100%">
        {loading && <Loader loading={loading} />}
        <View {...{ data: data.getSheikhs, filters }} />
      </Box>
    </CardWrapper>
  );
};

export default Sheikhs;
