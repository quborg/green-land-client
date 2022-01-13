import { Box, Grid } from '@mui/material';

import { withStyles } from '@mui/styles';

import {
  Books,
  Categories,
  Chapters,
  Contents,
  ContentView,
  Dump,
  Player,
  Search,
  Sheikhs,
} from './cards/components';
import style from './style';

const HoudaWaNour: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Box>
    <Grid className={classes.container} container>
      <Grid item xs={12} sm={5} md={3} lg={4}>
        <Grid className={classes.search} item xs>
          <Search />
        </Grid>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Grid className={classes.sheikhs} item xs>
              <Sheikhs />
            </Grid>
            <Grid className={classes.categories} item xs>
              <Categories />
            </Grid>
          </Grid>
          <Grid className={classes.books} item xs={12} lg={6}>
            <Books />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={7} md={4}>
        <Grid className={classes.chapters} item xs>
          <Chapters />
        </Grid>
        <Grid className={classes.contents} item xs>
          <Contents />
        </Grid>
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <Grid container>
          <Grid className={classes.indexView} item xs={12} sm={6} md={12}>
            <ContentView />
          </Grid>
          <Grid className={classes.writeDump} item xs={12} sm={6} md={12}>
            <Dump />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <Player />
  </Box>
);

export default withStyles(style)(HoudaWaNour);
