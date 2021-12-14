import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { toast } from 'material-react-toastify';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import { compare2arrays } from './helper';
import View from './view';

const Categories: React.FC = () => {
  const {
    data: { getCategoriesFilters: filters },
  } = useQuery(State.GET_CATEGORIES_FILTERS);

  const [parents, setParents] = useState(filters.parents);

  const {
    loading,
    error,
    data = { getCategories: [] },
    refetch,
    networkStatus,
  } = useQuery(Query.CATEGORY.CATEGORIES, {
    variables: { args: { parents } },
    notifyOnNetworkStatusChange: true,
  });

  toast.error(error);

  useEffect(() => {
    if (!compare2arrays(parents, filters.parents)) {
      setParents(filters.parents);
      refetch({ args: { parents: filters.parents } });
    }
  }, [parents, filters, refetch]);

  return (
    <CardWrapper data={data.getCategories} filters={filters}>
      <Box height="100%">
        {loading && networkStatus === 1 && <Loader loading={loading} />}
        <View {...{ data: data.getCategories, filters, loading, networkStatus }} />
      </Box>
    </CardWrapper>
  );
};

export default Categories;
