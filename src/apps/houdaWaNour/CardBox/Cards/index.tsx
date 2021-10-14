import { KEYS } from 'src/defs';

import Books from './Books';
import Categories from './Categories';
import Dump from './Dump';
import Indexes from './Indexes';
import IndexView from './IndexView';
import Search from './Search';
import Sheikhs from './Sheikhs';

const Cards: React.FC<TYPES.CardsProps> = ({ cardName }) => {
  if (cardName === KEYS.search) return <Search />;
  if (cardName === KEYS.books) return <Books />;
  if (cardName === KEYS.sheikhs) return <Sheikhs />;
  if (cardName === KEYS.categories) return <Categories />;
  if (cardName === KEYS.indexes) return <Indexes />;
  if (cardName === KEYS.indexView) return <IndexView />;
  if (cardName === KEYS.dump) return <Dump />;
  return <>{cardName || 'box'}</>;
};

export default Cards;
