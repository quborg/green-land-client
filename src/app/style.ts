import { lighten, Theme } from '@material-ui/core';

const style = (theme: Theme): any => ({
  container: {
    height: `calc(100vh - ${theme.spacing(16 + 8)}px)`,
  },
  search: {
    height: `calc((100vh - ${theme.spacing(16 + 8)}px) * 0.15)`,
  },
  sheikhsClassify: {
    height: `calc((100vh - ${theme.spacing(16 + 8)}px) * 0.85)`,
  },
  sheikhs: {
    height: `calc((100vh - ${theme.spacing(16 + 8)}px) * 0.32)`,
  },
  categories: {
    height: `calc((100vh - ${theme.spacing(16 + 8)}px) * 0.53)`,
  },
  books: {
    height: `calc((100vh - ${theme.spacing(16 + 8)}px) * 0.85)`,
  },
  indexView: {
    height: `calc((100vh - ${theme.spacing(16 + 8)}px)/2)`,
  },
  writeDump: {
    height: `calc((100vh - ${theme.spacing(16 + 8)}px)/2)`,
  },
  advancedSearchBox: {
    backgroundColor: lighten(theme.palette.common.yellow, 0.6),
    '& legend, & span, & label': {
      fontSize: theme.typography.fontSize * 0.96,
    },
    '& textarea': {
      fontSize: theme.typography.fontSize,
    },
  },
  advancedSearchButton: {
    backgroundColor: lighten(theme.palette.common.gray, 0.8),
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
      backgroundColor: lighten(theme.palette.common.gray, 0.7),
    },
  },
  closeAdvancedSearch: { right: theme.spacing(1), top: theme.spacing(0.5) },
  selectableItemWrapper: {
    '&.child-wrapper': {
      borderLeft: `1px solid ${lighten(theme.palette.common.grayDark, 0.8)}`,
      '&:last-child': {
        borderBottom: `1px solid ${lighten(theme.palette.common.grayDark, 0.8)}`,
      },
    },
  },
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
  expandableItem: {
    '&:hover': {
      '& svg': {
        color: theme.palette.info.main,
      },
    },
  },
});

export default style;
