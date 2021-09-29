import { useEffect, useState } from 'react';

import { Button as MuiButton, Theme, withStyles } from '@material-ui/core';
import CONST from 'src/defs/const';

const style = (theme: Theme): any => ({
  danger: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  warning: {
    color: theme.palette.warning.contrastText,
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  info: {
    color: theme.palette.info.contrastText,
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  },
});

const Button: React.FC<TYPES.ButtonProps> = ({ colour, classes, children, ...rest }) => {
  const [color, setColor] = useState();
  const [isColorMuiButton, setIsColorMuiButton] = useState(false);

  useEffect(() => {
    const isMuiButtonProps = CONST.Theme.MuiButtonPropsColors.includes(colour);
    setIsColorMuiButton(isMuiButtonProps);
    if (isMuiButtonProps) setColor(colour);
  }, [colour, color, isColorMuiButton, setColor, setIsColorMuiButton]);

  return (
    <MuiButton
      className={!isColorMuiButton && classes[colour]}
      color={color}
      {...rest}>
      {children}
    </MuiButton>
  );
};

export default withStyles(style)(Button);
