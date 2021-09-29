import { Box, Typography, withStyles } from '@material-ui/core';

import style from '../style';

const SignTitle: React.FC<TYPES.SignTitleProps> = ({ classes, reset, theme, up }) => (
  <Box
    className={classes.title}
    color={theme.palette.common.burlyWood}
    mb={2}
    mr="auto"
    mt={1}>
    <Typography color="textSecondary" component="h1" variant="h5">
      {reset ? 'Reset password' : `Sign ${up ? 'Up' : 'In'}`}
    </Typography>
  </Box>
);

export default withStyles(style, { withTheme: true })(SignTitle);
