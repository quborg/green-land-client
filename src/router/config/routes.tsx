import * as Icons from '@material-ui/icons';
import { HoudaWaNour, Layout, Rslan } from 'src/apps';
import { KEYS } from 'src/defs';
import { Home } from 'src/pages';

import * as PATHS from './paths';

export const layoutRoute: TYPES.RouteConfigProps[] = [
  {
    key: KEYS.layout,
    path: PATHS.ROOT,
    component: Layout,
  },
  {
    key: KEYS.redirect,
    to: PATHS.ROOT,
  },
];

export const menuRoutes: TYPES.RouteConfigProps[] = [
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
    key: KEYS.houdaWaNour,
    path: PATHS.HOUDA_WA_NOUR,
    component: HoudaWaNour,
    menu: true,
    Icon: Icons.LibraryBooksRounded,
    label: 'الهدى والنور',
  },
  {
    key: KEYS.rslan,
    path: PATHS.RSLAN,
    component: Rslan,
    menu: true,
    Icon: Icons.CreateOutlined,
    label: 'الشيخ رسلان',
  },
  {
    key: KEYS.redirect,
    to: PATHS.HOME,
  },
];
