import { Navigate, Route, Routes } from 'react-router-dom';

import KEYS from 'src/defs/keys';

const RoutesBuilder: React.FC<TYPES.RoutesBuilderProps> = ({ routes, children }) => (
  <Routes>
    {routes.map(({ key, guard, ...rest }) => {
      if (key === KEYS.redirect) return <Route key={key} element={<Navigate {...rest} />} />;
      return <Route key={key} {...rest} />;
    })}
  </Routes>
);

export default RoutesBuilder;
