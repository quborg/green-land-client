import { PaletteType, ThemeOptions } from '@material-ui/core';

import overrides from './overrides';
import palette from './palettes';

const initialThemeObject = (type: PaletteType = 'light'): ThemeOptions => ({
  palette: {
    ...palette,
    type,
  },
  props: { MuiButton: { disableRipple: true } },
  overrides,
  direction: 'rtl',
});

export default initialThemeObject;
