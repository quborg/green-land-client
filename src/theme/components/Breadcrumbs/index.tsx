import React from 'react';
import { withRouter } from 'react-router-dom';

import { Box, Breadcrumbs as MuiBreadcrumbs, Typography, withStyles } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { PATHS } from 'src/router';

import style from './style';

const Breadcrumbs: React.FC<TYPES.BreadCrumbsProps> = ({
  classes,
  history,
  location: { pathname },
}) => (
  <MuiBreadcrumbs
    aria-label="Breadcrumbs"
    className={classes.wrapper}
    separator={<Icons.NavigateNext />}>
    <Box display="flex" onClick={() => history.push(PATHS.APP)}>
      <Icons.HomeRounded />
    </Box>
    <Box display="flex">
      <Icons.LibraryBooksRounded />
      <Typography component="span">{pathname.split('/')[2]}</Typography>
    </Box>
  </MuiBreadcrumbs>
);

export default withStyles(style)(withRouter(Breadcrumbs));
