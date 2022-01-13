import { Theme } from '@mui/material';
import { CONST } from 'src/defs';

const { topBar, topSpace, bottomBar, bottomSpace } = CONST.Theme.DIM.H;
const layoutSpacing = topBar + topSpace + bottomBar + bottomSpace;

const style = (theme: Theme): any => ({
  container: {
    height: `calc(100vh - ${theme.spacing(layoutSpacing)})`,
  },
  search: {
    height: '84px',
  },
  sheikhs: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)} - 84px) * 0.4)`,
    [theme.breakpoints.down('lg')]: {
      height: `calc((100vh - ${theme.spacing(layoutSpacing)} - 84px) * 0.3)`,
    },
  },
  categories: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)} - 84px) * 0.6)`,
    [theme.breakpoints.down('lg')]: {
      height: `calc((100vh - ${theme.spacing(layoutSpacing)} - 84px) * 0.4)`,
    },
  },
  books: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)} - 84px))`,
    [theme.breakpoints.down('lg')]: {
      height: `calc((100vh - ${theme.spacing(layoutSpacing)} - 84px) * 0.3)`,
    },
  },
  chapters: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}) * 0.40)`,
  },
  contents: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)}) * 0.60)`,
  },
  indexView: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)})/2)`,
  },
  writeDump: {
    height: `calc((100vh - ${theme.spacing(layoutSpacing)})/2)`,
  },
});

export default style;
