declare namespace TYPES {
  import { RedirectProps, RouteComponentProps } from 'react-router-dom';

  type RouteConfigProps = RedirectProps & {
    component?: React.ReactNode<RouteComponentProps>;
    menu?: boolean;
    Icon?: MuiIconProps;
    label?: string;
    key: string;
    path: string;
    guard?: boolean;
    routes?: RouteConfigProps[];
  };

  type RoutesBuilderProps = {
    routes: RouteConfigProps[];
  };
}
