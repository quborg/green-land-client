import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { HoudaWaNour, Layout } from 'src/apps';

// import { ROUTES, RoutesBuilder } from 'src/router';

const RouterProvider: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HoudaWaNour />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
