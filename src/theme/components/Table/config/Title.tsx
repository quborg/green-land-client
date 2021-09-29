import React from 'react';

import { LinearProgress, Typography, withStyles } from '@material-ui/core';

const style = (): any => ({
  progress: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

type TitleProps = {
  title?: string;
  loading?: boolean;
  classes: any;
};

const Title: React.FC<TitleProps> = ({ classes, title, loading }) => (
  <Typography variant="h6">
    {title}
    {loading && <LinearProgress className={classes.progress} color="secondary" />}
  </Typography>
);

export default withStyles(style)(Title);
