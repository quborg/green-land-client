import { Box, Button, withStyles } from '@material-ui/core';

import style from '../style';

const SignFooter: React.FC<TYPES.SignFooterProps> = (props) => {
  const { classes, reset, setReset, setUp, up } = props;

  return (
    <Box className={classes.footer} display="flex" justifyContent="space-between" width="1">
      {reset
        ? [
            <Button
              color="primary"
              key="sign-in-link-btn"
              onClick={() => {
                setReset(false);
                setUp(false);
              }}
              size="small">
              sign in
            </Button>,
            <Button
              color="primary"
              key="sign-up-link-btn"
              onClick={() => {
                setReset(false);
                setUp(true);
              }}
              size="small">
              sign up
            </Button>,
          ]
        : [
            <Button
              color="primary"
              key="sign-link-btn"
              onClick={() => setUp(!up)}
              size="small">
              {up ? 'sign in' : 'sign up'}
            </Button>,
            <Button
              color="primary"
              key="reset-link-btn"
              onClick={() => setReset(true)}
              size="small">
              forget password ?
            </Button>,
          ]}
    </Box>
  );
};

export default withStyles(style, { withTheme: true })(SignFooter);
