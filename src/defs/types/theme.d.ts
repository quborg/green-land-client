declare namespace TYPES {
  type ThemeProps = Theme;

  type AlertProps = ClassesProps & SnackbarProps & MuiAlertProps;

  type LoaderProps = ClassesProps & { loading: boolean };
}
