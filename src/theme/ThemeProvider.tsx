import React, { FC, useCallback, useContext, useState } from 'react';

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  PaletteMode,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { jssPreset, StylesProvider } from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import KEYS from 'src/defs/keys';

import { ThemeAssets } from './components';
import { initialThemeObject } from './styles/core';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

class LocalTheme {
  static setLocalTheme(isDark: boolean): void {
    if ('localStorage' in window) {
      const themePreferenceObject: TYPES.ThemePreferenceObject = {
        prefersDarkMode: isDark === true,
      };
      localStorage.setItem(KEYS.prefersDarkMode, JSON.stringify(themePreferenceObject));
    }
  }

  static getLocalTheme(): PaletteMode {
    if ('localStorage' in window) {
      const themePreferenceString = localStorage.getItem(KEYS.prefersDarkMode);
      if (themePreferenceString) {
        try {
          const themePreferenceParsed = JSON.parse(
            themePreferenceString
          ) as TYPES.ThemePreferenceObject;
          return themePreferenceParsed.prefersDarkMode ? 'dark' : 'light';
        } catch {
          return 'light';
        }
      }
    }
    return 'light';
  }
}

function TypeMode(): PaletteMode {
  const [prefersDarkMode] = useState(
    useMediaQuery('(prefers-color-scheme: dark)') || LocalTheme.getLocalTheme() === 'dark'
  );
  return prefersDarkMode ? 'dark' : 'light';
}

export function CreateTheme(): TYPES.ThemeData {
  const type = TypeMode();
  const [theme, setTheme] = useState<Theme>(
    createTheme({
      ...initialThemeObject(type),
    })
  );

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const isNewThemeDark = currentTheme.palette.mode !== 'dark';
      LocalTheme.setLocalTheme(isNewThemeDark);
      if (isNewThemeDark) return createTheme(initialThemeObject('dark'));
      return createTheme(initialThemeObject('dark'));
    });
  }, []);

  theme.shadows[24] = `inset 0px 3px 3px -2px rgb(0 0 0 / 20%), \
                       inset 0px 3px 4px 0px rgb(0 0 0 / 14%), \
                       inset 0px 1px 8px 0px rgb(0 0 0 / 12%)`;

  return { theme, toggleTheme };
}

export const ThemeContext = React.createContext<TYPES.ThemeData>({
  theme: createTheme(initialThemeObject()),
  toggleTheme: () => {},
});

export function useTheme(): TYPES.ThemeData {
  return useContext(ThemeContext);
}

const ThemeProvider: FC = ({ children }) => {
  const theme = CreateTheme();
  return (
    <StylesProvider jss={jss}>
      <ThemeContext.Provider value={theme}>
        <MuiThemeProvider theme={theme.theme}>
          <ThemeAssets>{children}</ThemeAssets>
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProvider;
