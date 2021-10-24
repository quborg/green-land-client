import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { toast } from 'material-react-toastify';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const Categories: React.FC = () => {
  const {
    data: { filters },
  } = useQuery(State.FILTERS);

  const {
    loading,
    error,
    data = { getCategories: [] },
    fetchMore,
  } = useQuery(Query.CATEGORY.CATEGORIES);

  toast.error(error);

  useEffect(() => {
    const { expanded } = filters.categories;
    const expandedIds = Object.keys(expanded).filter((_id) => expanded[_id]);
    if (expandedIds.length) {
      const expandedNotLoaded = expandedIds.filter(
        (_id) => !data.getCategories.filter(({ parent }) => parent === _id).length
      );
      const categoriesNotLoaded = data.getCategories.filter(
        ({ _id }) => expandedNotLoaded.filter((notLoaded_id) => notLoaded_id === _id).length
      );
      if (categoriesNotLoaded.length) {
        categoriesNotLoaded.forEach(({ ID }) =>
          fetchMore({ variables: { args: { filter: { parent: ID } } } })
        );
      }
    }
  }, [data, filters, fetchMore]);

  return (
    <Box>
      {loading && <Loader loading={loading} />}
      <View {...{ data: data.getCategories, filters, fetchMore, loading }} />
    </Box>
  );
};

export default Categories;
