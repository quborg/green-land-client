import { BrowserRouter } from 'react-router-dom';

import { ROUTES, RoutesBuilder } from 'src/router';

const RouterProvider: React.FC = () => (
  <BrowserRouter>
    <RoutesBuilder routes={ROUTES.layoutRoute} />
  </BrowserRouter>
);

export default RouterProvider;
