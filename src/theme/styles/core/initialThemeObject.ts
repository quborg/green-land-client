import { PaletteMode, ThemeOptions } from '@mui/material';

import palette from './palettes';

const initialThemeObject = (mode: PaletteMode = 'light'): ThemeOptions => ({
  palette: {
    ...palette,
    mode,
  },
  direction: 'rtl',
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
});

export default initialThemeObject;
