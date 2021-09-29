import React from 'react';

import { Box, IconButton, InputBase, Theme, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Search as SearchIcon } from '@material-ui/icons';

const style = (theme: Theme): any => ({
  wrapper: {
    position: 'relative',
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    height: theme.spacing(5),
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25),
    },
    '& svg': {
      fill: theme.palette.primary.contrastText,
    },
    '& input': {
      color: theme.palette.primary.contrastText,
      transition: theme.transitions.create('width'),
      width: theme.spacing(22),
      '&:focus': {
        width: theme.spacing(44),
      },
    },
  },
});

const SearchInput: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <Box className={classes.wrapper} display="flex">
    <IconButton aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase autoFocus className={classes.input} color="secondary" placeholder="Search" />
  </Box>
);

export default withStyles(style)(SearchInput);
