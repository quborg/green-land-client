import React from 'react';

import { Link, Typography, withStyles } from '@material-ui/core';
import { Copyright as CopyrightIcon } from '@material-ui/icons';

import style from './style';

const APP_NAME = 'Ecom App Now';
const SITE_URL = 'https://www.ecom-app-now.com/';

const Copyright: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Typography align="center" className={classes.typo} color="textSecondary" variant="body2">
    Copyright
    <CopyrightIcon className={classes.icon} fontSize="small" />
    <Link color="textPrimary" href={SITE_URL}>
      {APP_NAME}
    </Link>{' '}
    Admin Panel {new Date().getFullYear()}.
  </Typography>
);

export default withStyles(style)(Copyright);
