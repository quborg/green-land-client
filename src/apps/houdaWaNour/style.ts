import { Theme } from '@material-ui/core';
import { CONST } from 'src/defs';

const { topBar, topSpace, bottomSpace } = CONST.App.DIM.H;
const layoutSpacing = topBar + topSpace + bottomSpace;

const style = (theme: Theme): any => ({
  container: {
    height: `calc(100vh - ${theme.spacing(layoutSpacing)}px)`,
  },
  search: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}px) * 0.15)`,
  },
  sheikhsAndCategory: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}px) * 0.85)`,
  },
  sheikhs: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}px) * 0.32)`,
  },
  categories: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}px) * 0.53)`,
  },
  books: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}px) * 0.85)`,
  },
  indexView: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}px)/2)`,
  },
  writeDump: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}px)/2)`,
  },
});

export default style;
