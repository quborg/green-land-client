import { lighten, Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  selected2: {
    '&.selected:hover': {
      background: `linear-gradient(to top, transparent 40%, ${lighten(
        theme.palette.common.cyan,
        0.65
      )}), linear-gradient(to bottom, transparent 30%, ${lighten(
        theme.palette.common.cyan,
        0.65
      )})`,
    },
  },
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis [....]',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
  },
});

export default style;
