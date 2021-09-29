declare namespace TYPES {
  type ThemeProps = Theme;
  type MuiIconProps = OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  type ButtonProps = MuiButtonProps & {
    colour: 'primary' | 'secondary' | 'info' | 'warning' | 'error';
  };

  type BreadCrumbsProps = ClassesProps & RouteComponentProps;

  type AlertProps = ClassesProps & SnackbarProps & MuiAlertProps & ApolloResultFlagsProps;

  type ImageProps = {
    src?: string;
    height?: string;
    width?: string;
    label?: string;
    editable?: boolean;
    aspectRatio?: number;
    onChange?: (e: any) => void;
  };

  type DialogProps = {
    open?: boolean;
    context?: 'delete' | 'update' | 'default' | string;
    confirmation?: (flag: boolean) => any;
  };

  type TableOptions = MUIDataTableOptions;
  type TableComponents = MUIDataTableProps.components;
  type TableProps = EntitiesViewProps;

  type TransitionProps = {
    in?: boolean;
    children: ReactNode;
  };
}
