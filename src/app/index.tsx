import { Grid, withStyles } from '@material-ui/core';

import C from './Components';
import style from './style';

const App: React.FC<TYPES.AppProps> = ({ classes }) => (
  <Grid className={classes.container} container>
    <Grid className={classes.container} item xs>
      <Grid container>
        <Grid className={classes.search} item xs>
          <C cName="search" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.sheikhsClassify} item xs={6}>
          <Grid container>
            <Grid className={classes.sheikhs} item xs>
              <C cName="sheikhs" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid className={classes.categories} item xs>
              <C cName="categories" />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.books} item xs={6}>
          <C cName="books" />
        </Grid>
      </Grid>
    </Grid>

    <Grid className={classes.container} item xs>
      <C cName="indexes" />
    </Grid>

    <Grid className={classes.container} item xs>
      <Grid container>
        <Grid className={classes.indexView} item xs>
          <C cName="indexView" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.writeDump} item xs>
          <C cName="writeDump" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(style)(App);
