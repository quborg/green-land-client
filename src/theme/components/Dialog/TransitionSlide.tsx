import { forwardRef } from 'react';

import { Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

const TransitionSlide = forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
  ) => <Slide direction="left" ref={ref} {...props} />
);

TransitionSlide.defaultProps = {
  children: <></>,
};

export default TransitionSlide;
