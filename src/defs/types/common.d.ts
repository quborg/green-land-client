declare namespace TYPES {
  import { RouteComponentProps } from 'react-router-dom';

  import { ApolloError, ObservableQueryFields } from '@apollo/client';
  import {
    ButtonProps as MuiButtonProps,
    SnackbarProps,
    SvgIconTypeMap,
    Theme,
  } from '@material-ui/core';
  import { AlertProps as MuiAlertProps } from '@material-ui/lab';
  import { KEYS } from 'src/defs';

  type MaybeIn<T> = { [P in keyof T]?: T[P] };

  interface ClassesProps {
    classes: any;
  }

  interface ThemeProps {
    theme?: MaybeIn<Theme>;
  }

  interface TRefetch {
    refetch: ObservableQueryFields.refetch;
  }

  interface TFetchMore {
    fetchMore: ObservableQueryFields.fetchMore;
  }
}
