import { Theme, withStyles } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles/colorManipulator';

const CssGlobal = withStyles(({ spacing, palette }: Theme) => ({
  '@global': {
    '.GuttersNone': {
      padding: '0',
    },
    '::-webkit-scrollbar': {
      width: spacing(0.4),
      height: spacing(0.625),
    },
    '::-webkit-scrollbar-track': {
      boxShadow: ['inset 0 0 6px', alpha(palette.common.grayDark, 0.2)].join(' '),
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: alpha(palette.common.grayDark, 0.2),
      borderRadius: '2rem',
      '&:hover': {
        backgroundColor: alpha(palette.common.cyan, 0.2),
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
                  radial-gradient(ellipse at bottom, #9bffff, transparent),
                  radial-gradient(ellipse at top left, #ddb6f7, transparent);`,
      height: '100vh',
    },
    input: {
      '&:-webkit-autofill': {
        '-webkit-box-shadow': `inset 0 0 0 100px ${palette.warning.dark}`,
      },
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
