import { Grid, withStyles } from '@material-ui/core';

import CardBox from './CardBox';
import style from './style';

const HoudaWaNour: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Grid className={classes.container} container>
    <Grid className={classes.container} item xs>
      <Grid container>
        <Grid className={classes.search} item xs>
          <CardBox cardName="search" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.sheikhsClassify} item xs={6}>
          <Grid container>
            <Grid className={classes.sheikhs} item xs>
              <CardBox cardName="sheikhs" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid className={classes.categories} item xs>
              <CardBox cardName="categories" />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.books} item xs={6}>
          <CardBox cardName="books" />
        </Grid>
      </Grid>
    </Grid>

    <Grid className={classes.container} item xs>
      <CardBox cardName="indexes" />
    </Grid>

    <Grid className={classes.container} item xs>
      <Grid container>
        <Grid className={classes.indexView} item xs>
          <CardBox cardName="indexView" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.writeDump} item xs>
          <CardBox cardName="writeDump" />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(style)(HoudaWaNour);
