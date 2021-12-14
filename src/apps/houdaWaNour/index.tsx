import { Grid, withStyles } from '@material-ui/core';

import {
  Books,
  Categories,
  Chapters,
  Contents,
  ContentView,
  Dump,
  Search,
  Sheikhs,
} from './cards/components';
import style from './style';

const HoudaWaNour: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Grid className={classes.container} container>
    <Grid className={classes.container} item xs>
      <Grid container>
        <Grid className={classes.search} item xs>
          <Search />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.sheikhsAndCategory} item xs={6}>
          <Grid container>
            <Grid className={classes.sheikhs} item xs>
              <Sheikhs />
            </Grid>
          </Grid>
          <Grid container>
            <Grid className={classes.categories} item xs>
              <Categories />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.books} item xs={6}>
          <Books />
        </Grid>
      </Grid>
    </Grid>

    <Grid className={classes.container} item xs>
      <Grid container>
        <Grid className={classes.chapters} item xs>
          <Chapters />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.contents} item xs>
          <Contents />
        </Grid>
      </Grid>
    </Grid>

    <Grid className={classes.container} item xs>
      <Grid container>
        <Grid className={classes.indexView} item xs>
          <ContentView />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.writeDump} item xs>
          <Dump />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(style)(HoudaWaNour);
