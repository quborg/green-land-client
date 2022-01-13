import { ComponentNameToClassKey } from '@mui/material/styles';
import { FlexDirectionProperty } from '@mui/styles/node_modules/csstype';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MUIDataTable?: {
      paper?: {
        maxHeight: string;
        overflow: string;
        display: string;
        flexDirection: FlexDirectionProperty;
      };
    };
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    light: string;
    dark: string;
    gray: string;
    grayDark: string;
    grey: string;
    blue: string;
    indigo: string;
    purple: string;
    pink: string;
    red: string;
    orange: string;
    yellow: string;
    green: string;
    teal: string;
    cyan: string;
    chocolate: string;
    olive: string;
    burlyWood: string;
    bisque: string;
  }
}
