import { useEffect, useRef, useState } from 'react';

import { Box, Divider, Paper, withStyles } from '@material-ui/core';

import Title from './Title';

const CardsWrapper: React.FC<TYPES.CardProps> = ({ children, cardName }) => {
  const boxHeight = useRef<HTMLDivElement>(null);
  const titleHeight = useRef<HTMLDivElement>(null);
  const [bodyHeight, setHeight] = useState<any>('100%');

  useEffect(() => {
    const t = titleHeight?.current?.clientHeight;
    const b = boxHeight?.current?.clientHeight;
    if (b && t && b - t !== bodyHeight) {
      setHeight(b - t - 16);
    }
  }, [bodyHeight]);

  return (
    <div ref={boxHeight} style={{ height: '100%' }}>
      <Box height="100%" p={0.67}>
        <Paper elevation={3} style={{ height: '100%' }}>
          <Box height="100%">
            <div ref={titleHeight}>
              <Title cardName={cardName} />
            </div>
            <Box>
              <Divider />
            </Box>
            <Box height={bodyHeight} pb={0}>
              {children}
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default withStyles({}, { withTheme: true })(CardsWrapper);
