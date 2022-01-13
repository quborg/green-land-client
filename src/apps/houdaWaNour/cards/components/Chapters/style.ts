import { lighten, Theme } from '@mui/material';

const style = (theme: Theme): any => ({
  passiveItem: {
    background: `linear-gradient(to top, transparent 50%, ${lighten(
      theme.palette.common.grayDark,
      0.88
    )}), linear-gradient(to bottom, transparent 50%, ${lighten(
      theme.palette.common.grayDark,
      0.88
    )})`,
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: 'inset 0px 0px 6px 1px rgb(0 0 0 / 5%)',
    '&.expanded': {
      borderBottom: `1px solid ${lighten(theme.palette.common.grayDark, 0.8)}`,
    },
  },
});

export default style;
