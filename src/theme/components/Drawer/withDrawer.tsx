import React from 'react';

import Drawer from '.';

const withDrawer = (Component: React.ComponentType): React.ComponentType => (props) => (
  <Drawer>
    <Component {...props} />
  </Drawer>
);
export default withDrawer;
