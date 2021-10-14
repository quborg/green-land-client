declare namespace TYPES {
  type ThemeProps = Theme;

  type AlertProps = ClassesProps & SnackbarProps & MuiAlertProps & ApolloResultFlagsProps;

  type LoaderProps = ClassesProps & { loading: boolean };
}
