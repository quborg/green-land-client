import { Redirect, Route, Switch } from 'react-router-dom';

import KEYS from 'src/defs/keys';

import * as PATHS from '../config/paths';
import GuardRoute from './GuardRoute';

const RoutesBuilder: React.FC<TYPES.RoutesBuilderProps> = ({ routes, children }) => (
  <Switch>
    {routes.map(({ key, guard, ...rest }) => {
      if (key === KEYS.redirect) return <Redirect key={key} {...rest} />;
      if (guard)
        return (
          <GuardRoute key={key} path={PATHS.PROFILE}>
            {children}
          </GuardRoute>
        );
      return <Route key={key} {...rest} />;
    })}
  </Switch>
);

export default RoutesBuilder;
