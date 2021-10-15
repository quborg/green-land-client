declare namespace TYPES {
  import { RouteComponentProps } from 'react-router-dom';

  import { ApolloError, ObservableQueryFields } from '@apollo/client';
  import {
    ButtonProps as MuiButtonProps,
    SnackbarProps,
    SvgIconTypeMap,
    Theme,
  } from '@material-ui/core';
  import { OverridableComponent } from '@material-ui/core/OverridableComponent';
  import { AlertProps as MuiAlertProps } from '@material-ui/lab';
  import { MUIDataTableOptions, MUIDataTableProps } from 'mui-datatables';
  import { KEYS } from 'src/defs';

  type MaybeIn<T> = { [P in keyof T]?: T[P] };

  interface ClassesProps {
    classes: any;
  }

  interface ThemeProps {
    theme: Theme;
  }

  interface ApolloResultFlagsProps {
    loading: boolean;
    error?: ApolloError;
  }

  interface TRefetch {
    refetch: ObservableQueryFields.refetch;
  }

  interface TFetchMore {
    fetchMore: ObservableQueryFields.fetchMore;
  }
}
