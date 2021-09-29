import React, { FC, useCallback, useContext, useState } from 'react';

import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  PaletteType,
  Theme,
  useMediaQuery,
} from '@material-ui/core';
import { jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import KEYS from 'src/defs/keys';

import { ThemeAssets } from './components';
import { initialThemeObject } from './styles/core';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

type ThemePreferenceObject = { prefersDarkMode: boolean };

export type ThemeData = {
  theme: Theme;
  toggleTheme: () => void;
};

class LocalTheme {
  static setLocalTheme(isDark: boolean): void {
    if ('localStorage' in window) {
      const themePreferenceObject: ThemePreferenceObject = {
        prefersDarkMode: isDark === true,
      };
      localStorage.setItem(KEYS.prefersDarkMode, JSON.stringify(themePreferenceObject));
    }
  }

  static getLocalTheme(): PaletteType {
    if ('localStorage' in window) {
      const themePreferenceString = localStorage.getItem(KEYS.prefersDarkMode);
      if (themePreferenceString) {
        try {
          const themePreferenceParsed = JSON.parse(
            themePreferenceString
          ) as ThemePreferenceObject;
          return themePreferenceParsed.prefersDarkMode ? 'dark' : 'light';
        } catch {
          return 'light';
        }
      }
    }
    return 'light';
  }
}

function TypeMode(): PaletteType {
  const [prefersDarkMode] = useState(
    useMediaQuery('(prefers-color-scheme: dark)') || LocalTheme.getLocalTheme() === 'dark'
  );
  return prefersDarkMode ? 'dark' : 'light';
}

export function CreateTheme(): ThemeData {
  const type = TypeMode();
  const [theme, setTheme] = useState<Theme>(
    createMuiTheme({
      ...initialThemeObject(type),
    })
  );

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const isNewThemeDark = currentTheme.palette.type !== 'dark';
      LocalTheme.setLocalTheme(isNewThemeDark);
      if (isNewThemeDark) return createMuiTheme(initialThemeObject('dark'));
      return createMuiTheme(initialThemeObject('dark'));
    });
  }, []);

  theme.shadows[24] = `inset 0px 3px 3px -2px rgb(0 0 0 / 20%), \
                       inset 0px 3px 4px 0px rgb(0 0 0 / 14%), \
                       inset 0px 1px 8px 0px rgb(0 0 0 / 12%)`;

  return { theme, toggleTheme };
}

export const ThemeContext = React.createContext<ThemeData>({
  theme: createMuiTheme(initialThemeObject()),
  toggleTheme: () => {},
});

export function useTheme(): ThemeData {
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
