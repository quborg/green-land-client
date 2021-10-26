import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { KEYS } from 'src/defs';
import { State } from 'src/graphql';

import View from './view';

const CardsWrapper: React.FC<TYPES.CardWrapperProps> = ({ cardName, children }) => {
  const [searchableItems] = useState(cardName === KEYS.books);

  const {
    data: {
      filters: { [searchableItems ? cardName : KEYS.default]: itemFilters, ...restFilters },
    },
  } = useQuery(State.FILTERS);

  return <View {...{ cardName, searchableItems, itemFilters, restFilters }}>{children}</View>;
};

export default CardsWrapper;
