import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import KEYS from 'src/defs/keys';
import { State } from 'src/graphql';

import View from './view';

const Dump: React.FC = () => {
  const {
    data: { getContentsFilters: contentsFilters },
  } = useQuery(State.GET_CONTENTS_FILTERS);

  return (
    <CardWrapper filters={{ cardName: KEYS.dump }}>
      <Box height="100%" overflow="auto">
        <View {...{ data: contentsFilters.selected }} />
      </Box>
    </CardWrapper>
  );
};

export default Dump;
