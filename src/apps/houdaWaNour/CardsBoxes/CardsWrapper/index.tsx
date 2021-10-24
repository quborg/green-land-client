import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { KEYS } from 'src/defs';
import { State } from 'src/graphql';

import View from './view';

const CardsWrapper: React.FC<TYPES.CardWrapperProps> = ({ cardName, children }) => {
  const [searchable] = useState(
    [KEYS.sheikhs, KEYS.books, KEYS.categories].includes(cardName)
  );

  const {
    data: {
      filters: { [searchable ? cardName : KEYS.default]: itemFilters, ...restFilters },
    },
  } = useQuery(State.FILTERS);

  return <View {...{ cardName, searchable, itemFilters, restFilters }}>{children}</View>;
};

export default CardsWrapper;
