import { Transition as ReactTransition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  maxHeight: 0,
  overflow: 'hidden',
};

const transitionStyles = {
  entering: { opacity: 1, maxHeight: '100vh', overflow: 'unset' },
  entered: { opacity: 1, maxHeight: '100vh', overflow: 'unset' },
  exiting: { opacity: 0, maxHeight: 0, overflow: 'hidden' },
  exited: { opacity: 0, maxHeight: 0, overflow: 'hidden' },
};

const Transition: React.FC<TYPES.TransitionProps> = ({ children, in: inProp = true }) => (
  <ReactTransition appear in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}>
        {children}
      </div>
    )}
  </ReactTransition>
);

export default Transition;
