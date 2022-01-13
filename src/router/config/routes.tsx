import * as Icons from '@mui/icons-material';
import KEYS from 'src/defs/keys';

import * as PATHS from './paths';

export const menuRoutes: TYPES.RouteConfigProps[] = [
  {
    key: KEYS.houdaWaNour,
    to: PATHS.HASH,
    Icon: Icons.ViewQuilt,
    label: 'برنامج سلسلة الهدى والنور',
  },
  {
    key: KEYS.contactUs,
    to: PATHS.HASH,
    Icon: Icons.MailOutline,
    label: 'إتصل بنا',
  },
  // {
  //   key: KEYS.rslan,
  //   path: PATHS.RSLAN,
  //   element: Rslan,
  //   menu: true,
  //   Icon: Icons.CreateOutlined,
  //   label: 'الشيخ رسلان',
  // },
];
