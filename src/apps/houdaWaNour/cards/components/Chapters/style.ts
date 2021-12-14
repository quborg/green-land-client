import { lighten, Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  selectableItem: {
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
    '&.selected': {
      background: `linear-gradient(to top, transparent 40%, ${lighten(
        theme.palette.common.cyan,
        0.65
      )}), linear-gradient(to bottom, transparent 30%, ${lighten(
        theme.palette.common.cyan,
        0.65
      )})`,
      '&:hover': {
        background: `linear-gradient(to top, transparent 30%, ${lighten(
          theme.palette.common.red,
          0.6
        )}), linear-gradient(to bottom, transparent 20%, ${lighten(
          theme.palette.common.red,
          0.6
        )})`,
      },
    },
    '&.expanded': {
      borderBottom: `1px solid ${lighten(theme.palette.common.grayDark, 0.8)}`,
    },
    '&:hover': {
      cursor: 'pointer',
      background: `linear-gradient(to top, transparent 40%, ${lighten(
        theme.palette.common.yellow,
        0.5
      )}), linear-gradient(to bottom, transparent 30%, ${lighten(
        theme.palette.common.yellow,
        0.5
      )})`,
      boxShadow: 'inset 0px 0px 6px 1px rgb(0 0 0 / 20%)',
    },
  },
  selectableItemWrapper: {
    '&.child-wrapper': {
      borderLeft: `1px solid ${lighten(theme.palette.common.grayDark, 0.8)}`,
      '&:last-child': {
        borderBottom: `1px solid ${lighten(theme.palette.common.grayDark, 0.8)}`,
      },
    },
  },
});

export default style;
