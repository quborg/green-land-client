import { PaletteType, ThemeOptions } from '@material-ui/core';

import palette from './palettes';

const initialThemeObject = (type: PaletteType = 'light'): ThemeOptions => ({
  palette: {
    ...palette,
    type,
  },
  props: { MuiButton: { disableRipple: true } },
  direction: 'rtl',
});

export default initialThemeObject;
