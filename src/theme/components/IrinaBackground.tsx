import { fade, Theme, withStyles } from '@material-ui/core';

const style = (theme: Theme, color = theme.palette.warning.main): any => ({
  lines: {
    zIndex: '0',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '500px',
    height: '100%',
    margin: 'auto',
  },
  line: {
    position: 'absolute',
    width: '1px',
    height: '100%',
    top: '0',
    background: fade(color, 0.1),
    opacity: 0.3,
    overflow: 'hidden',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: '15vh',
      width: '100%',
      top: '-50%',
      left: '0',
      background: `linear-gradient(to bottom, ${fade(
        color,
        0
      )} 0%, ${color} 30%, ${color} 50%)`,
      animation: 'irinaDrop 1s 0s infinite',
      animationFillMode: 'forwards',
      animationTimingFunction: 'cubic-bezier(0.4, 0.26, 0, 0.97)',
    },
    '&:nth-child(1)': {
      marginLeft: '10%',
      '&::after': {
        animationDelay: '0.9s',
      },
    },
    '&:nth-child(2)': {
      marginLeft: '30%',
      '&::after': {
        animationDelay: '0.3s',
      },
    },
    '&:nth-child(3)': {
      marginLeft: '50%',
    },
    '&:nth-child(4)': {
      marginLeft: '70%',
      '&::after': {
        animationDelay: '0.65s',
      },
    },
    '&:nth-child(5)': {
      marginLeft: '90%',
      '&::after': {
        animationDelay: '0.45s',
      },
    },
  },
});

const IrinaBackground: React.FC<TYPES.ClassesProps> = ({ classes }) => (
  <div className={classes.lines}>
    <div className={classes.line} />
    <div className={classes.line} />
    <div className={classes.line} />
    <div className={classes.line} />
    <div className={classes.line} />
  </div>
);

export default withStyles(style)(IrinaBackground);
