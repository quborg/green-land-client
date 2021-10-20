import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { KEYS } from 'src/defs';
import { State } from 'src/graphql';

import View from './view';

const TitleCard: React.FC<TYPES.TitleCardProps> = ({ cardName }) => {
  const [selectable] = useState(
    [KEYS.sheikhs, KEYS.books, KEYS.categories].includes(cardName)
  );

  const {
    data: {
      filters: { [selectable ? cardName : KEYS.default]: filters, ...restFilters },
    },
  } = useQuery(State.FILTERS);

  return <View {...{ cardName, selectable, filters, restFilters }} />;
};

export default TitleCard;
