import { KEYS } from 'src/defs';
import Tr from 'src/local';

import { Books, Categories, Dump, Indexes, IndexView, Search, Sheikhs } from './components';

const Cards: React.FC<TYPES.CardsProps> = ({ cardName }) => {
  if (cardName === KEYS.search) return <Search />;
  if (cardName === KEYS.books) return <Books />;
  if (cardName === KEYS.sheikhs) return <Sheikhs />;
  if (cardName === KEYS.categories) return <Categories />;
  if (cardName === KEYS.indexes) return <Indexes />;
  if (cardName === KEYS.indexView) return <IndexView />;
  if (cardName === KEYS.dump) return <Dump />;
  return <>{cardName}</>;
};

Cards.defaultProps = {
  cardName: Tr(KEYS.default),
};

export default Cards;
