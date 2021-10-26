import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { KEYS } from 'src/defs';
import { Query, State } from 'src/graphql';

import View from './view';

const TitleCard: React.FC<TYPES.TitleCardProps> = ({ cardName, searchableItems }) => {
  const [selectableAll] = useState(
    [KEYS.sheikhs, KEYS.books, KEYS.categories].includes(cardName)
  );

  const {
    data: {
      filters: { [selectableAll ? cardName : KEYS.default]: itemFilters, ...restFilters },
    },
  } = useQuery(State.FILTERS);

  const { data = { getCategories: [] } } = useQuery(Query.CATEGORY.CATEGORIES, {
    skip: cardName !== KEYS.categories,
    variables: { args: { filters: { parent: 0 } } },
    fetchPolicy: 'no-cache',
  });

  console.log(cardName, data.getCategories);

  return (
    <View
      {...{
        cardName,
        selectableAll,
        searchableItems,
        itemFilters,
        restFilters,
        categoriesData0: data.getCategories,
      }}
    />
  );
};

export default TitleCard;
