import { useCallback, useEffect, useRef, useState } from 'react';

import { Box, Divider, Paper, withStyles } from '@material-ui/core';
import { KEYS } from 'src/defs';

import { Scroll, SearchItems, TitleBox } from './components';

const CardWrapper: React.FC<TYPES.CardWrapperProps> = ({
  data,
  dataLength,
  filters,
  children,
  loadMore,
}) => {
  const { cardName, searchableItems, openSearch } = filters;

  const titleRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(32);
  useEffect(() => {
    const t = titleRef?.current?.clientHeight || 32;
    const s = searchRef?.current?.clientHeight || 33;
    const h = searchableItems && openSearch ? t + s : t;
    if (headerHeight !== h) setHeaderHeight(h);
  }, [headerHeight, setHeaderHeight, searchableItems, openSearch]);

  return (
    <Box height="100%" minHeight={cardName === KEYS.search ? '122.25px' : ''}>
      <Box height="100%" p={0.67}>
        <Paper
          elevation={3}
          style={{ height: '100%', overflow: cardName !== KEYS.search ? 'hidden' : 'unset' }}>
          <Box height="100%">
            <Box {...{ ref: titleRef }}>
              <TitleBox {...{ data, dataLength, filters }} />
            </Box>
            {searchableItems && openSearch && (
              <Box {...{ ref: searchRef }}>
                <Divider />
                <SearchItems {...{ filters }} />
              </Box>
            )}
            <Divider />
            <Scroll {...{ cardName, headerHeight, loadMore }}>{children}</Scroll>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default withStyles({}, { withTheme: true })(CardWrapper);
