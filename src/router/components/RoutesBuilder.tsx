import { Redirect, Route, Switch } from 'react-router-dom';

import KEYS from 'src/defs/keys';

const RoutesBuilder: React.FC<TYPES.RoutesBuilderProps> = ({ routes, children }) => (
  <Switch>
    {routes.map(({ key, guard, ...rest }) => {
      if (key === KEYS.redirect) return <Redirect key={key} {...rest} />;
      return <Route key={key} {...rest} />;
    })}
  </Switch>
);

export default RoutesBuilder;
