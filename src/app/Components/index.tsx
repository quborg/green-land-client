import { KEYS } from 'src/defs';

import Card from './Card';
import { Books, Categories, Dump, Indexes, IndexView, Search, Sheikhs } from './components';

const Components: React.FC<TYPES.ComponentsProps> = ({ cName }) => {
  if (cName === KEYS.search) return <Search />;
  if (cName === KEYS.books) return <Books />;
  if (cName === KEYS.sheikhs) return <Sheikhs />;
  if (cName === KEYS.categories) return <Categories />;
  if (cName === KEYS.indexes) return <Indexes />;
  if (cName === KEYS.indexView) return <IndexView />;
  if (cName === KEYS.dump) return <Dump />;
  return <>{cName || 'box'}</>;
};

const Component: React.FC<TYPES.ComponentProps> = ({ cName }) => (
  <Card {...{ title: cName }}>
    <Components {...{ cName }} />
  </Card>
);

export default Component;
