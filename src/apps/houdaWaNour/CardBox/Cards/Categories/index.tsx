import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { ReactiveVars } from 'src/apollo';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const CardName = KEYS.categories;

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

  useEffect(() => {
    const { expanded } = filters[CardName];
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

  if (error) ReactiveVars.alert({ error, open: true, severity: KEYS.error });

  return (
    <Box height="100%" overflow="auto">
      {loading && <Loader loading={loading} />}
      <View {...{ data: data.getCategories, filters, fetchMore, loading }} />
    </Box>
  );
};

export default Categories;
