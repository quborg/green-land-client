import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isTokenValid } from 'src/helpers';

import * as PATHS from '../config/paths';

const GuardRoute: React.FC<TYPES.RouteConfigProps> = ({ children, ...rest }) => (
  <Route {...rest} render={() => (isTokenValid() ? children : <Redirect to={PATHS.SIGN} />)} />
);

export default GuardRoute;
