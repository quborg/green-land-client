import { Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

import bgPattern from './bg_pattern.svg';

const CssGlobal = withStyles(({ spacing, palette }: Theme) => ({
  '@global': {
    '.GuttersNone': {
      padding: '0',
    },
    '::-webkit-scrollbar': {
      width: spacing(0.625),
    },
    '::-webkit-scrollbar-track': {
      boxShadow: ['inset 0 0 6px', alpha(palette.common.grayDark, 0.7)].join(' '),
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: palette.common.chocolate, // alpha(palette.common.chocolate, 0.5),
      '&:hover': {
        backgroundColor: alpha(palette.common.chocolate, 0.8),
      },
    },
    '[class*="colorSecondary"]': {
      '& textarea, & input': {
        color: palette.secondary.main,
      },
    },
    '[hidden]': {
      display: 'none !important',
    },
    body: {
      background: `radial-gradient(ellipse at top right, #fff8aa, transparent),
      radial-gradient(ellipse at bottom, #6cffff, transparent),
      radial-gradient(ellipse at top left, #ed56ff, transparent)`,
      height: '100vh',
      '& #root': {
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: '150px auto',
        backgroundRepeat: 'repeat',
        height: '100%',
      },
    },
    '.MuiTextField-root': {
      '& label': {
        transformOrigin: 'top left',
        left: 28,
        right: 'auto',
      },
      '& legend': {
        textAlign: 'left',
      },
    },
    input: {
      '&:-webkit-autofill': {
        '-webkit-box-shadow': `inset 0 0 0 100px ${palette.warning.dark}`,
      },
    },
    '.MuiChip-colorDefault': {
      backgroundColor: 'rgb(0 0 0 / 15%) !important',
    },
    '.MuiButton-startIcon': {
      marginRight: '8px !important',
      marginLeft: '-4px !important',
    },
    '.spin': {
      animation: 'spin 4s linear infinite',
    },
    '@keyframes spin': {
      '100%': { transform: 'rotate(360deg)' },
    },
    '@keyframes irinaDrop': {
      '0%': {
        top: '-50%',
      },
      '100%': {
        top: '110%',
      },
    },
    '*': {
      transition: `color 100ms ease, background-color 100ms ease, background 100ms ease`,
    },
  },
}))(() => null);

export default CssGlobal;
