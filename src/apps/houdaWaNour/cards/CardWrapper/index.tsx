import { useEffect, useRef, useState } from 'react';

import { Box, Divider, Paper } from '@mui/material';
import { withStyles } from '@mui/styles';
import KEYS from 'src/defs/keys';

import { Scroll, SearchItems, TitleBox } from './components';

const CardWrapper: React.FC<TYPES.CardWrapperProps> = ({
  data,
  dataLength,
  filters,
  children,
  loadMore,
  buttonAdvancedSearch,
  theme,
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
    <Box height="100%">
      <Box height="100%" p={0.67}>
        <Paper
          elevation={3}
          style={{
            height: cardName !== KEYS.search ? '100%' : 'auto',
            overflow: cardName !== KEYS.search ? 'hidden' : 'unset',
            ...(cardName === KEYS.search && { paddingBottom: theme.spacing(1) }),
          }}>
          <Box height="100%">
            <Box {...{ ref: titleRef }}>
              <TitleBox {...{ data, dataLength, filters, buttonAdvancedSearch }} />
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
