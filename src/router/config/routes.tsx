import * as Icons from '@material-ui/icons';
import App from 'src/app';
import { KEYS } from 'src/defs';
import Layout from 'src/layout';
// import { Dashboard } from 'src/app/Layout/components';
// import { Item, Items } from 'src/app/Layout/views';
import { Home, Sign } from 'src/pages';
// import { withDrawer } from 'src/theme';

import * as PATHS from './paths';

export const layoutRoute: TYPES.RouteConfigProps[] = [
  {
    key: KEYS.layout,
    path: PATHS.HOME,
    component: Layout,
  },
  {
    key: KEYS.redirect,
    to: PATHS.HOME,
  },
];

export const mainRoutes: TYPES.RouteConfigProps[] = [
  {
    exact: true,
    key: KEYS.home,
    path: PATHS.HOME,
    component: Home,
    menu: true,
    Icon: Icons.DashboardRounded,
    label: 'الرئيسية',
  },
  {
    key: KEYS.app,
    path: PATHS.APP,
    component: App,
    menu: true,
    Icon: Icons.LibraryBooksRounded,
    label: 'الهدى والنور',
  },
  {
    key: KEYS.sign,
    path: PATHS.SIGN,
    component: Sign,
  },
  {
    key: KEYS.redirect,
    to: PATHS.HOME,
  },
];

export const ItemRoutes = {
  // question: [
  //   {
  //     key: KEYS.question,
  //     path: PATHS.QUESTION,
  //     component: withDrawer(Item),
  //   },
  // ],
  // section: [
  //   {
  //     key: KEYS.section,
  //     path: PATHS.SECTION,
  //     component: withDrawer(Item),
  //   },
  // ],
  // category: [
  //   {
  //     key: KEYS.category,
  //     path: PATHS.CATEGORY,
  //     component: withDrawer(Item),
  //   },
  // ],
  // user: [
  //   {
  //     key: KEYS.user,
  //     path: PATHS.USER,
  //     component: withDrawer(Item),
  //   },
  // ],
};
