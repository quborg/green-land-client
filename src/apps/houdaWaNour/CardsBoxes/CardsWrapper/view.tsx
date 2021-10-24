import { useEffect, useRef, useState } from 'react';

import { Box, Divider, Paper, withStyles } from '@material-ui/core';
import { KEYS } from 'src/defs';
import { setReactiveLocalFilters } from 'src/helpers';

import { SearchItemFilter, TitleBox } from './components';

const CardsWrapperView: React.FC<TYPES.CardWrapperViewProps> = ({
  cardName,
  searchable,
  itemFilters,
  restFilters,
  children,
}) => {
  const { keyword, openSearch, ...restItemFilters } = itemFilters;

  const titleHeight = useRef<HTMLDivElement>(null);
  const searchHeight = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(32);
  useEffect(() => {
    const t = titleHeight?.current?.clientHeight || 32;
    const s = searchHeight?.current?.clientHeight || 33;
    const h = searchable && openSearch ? t + s : t;
    if (headerHeight !== h) setHeaderHeight(h);
  }, [headerHeight, setHeaderHeight, searchable, openSearch]);

  const setKeyword = (key: string): void => {
    setReactiveLocalFilters({
      [cardName]: {
        keyword: key,
        openSearch,
        ...restItemFilters,
      },
      ...restFilters,
    });
  };

  return (
    <Box height="100%">
      <Box height="100%" p={0.67}>
        <Paper
          elevation={3}
          style={{ height: '100%', overflow: cardName !== KEYS.search ? 'hidden' : 'unset' }}>
          <Box height="100%">
            <Box {...{ ref: titleHeight }}>
              <TitleBox cardName={cardName} />
            </Box>
            {searchable && openSearch && (
              <Box {...{ ref: searchHeight }}>
                <Divider />
                <SearchItemFilter {...{ keyword, setKeyword }} />
              </Box>
            )}
            <Divider />
            <Box
              {...(cardName !== KEYS.search && {
                height: `calc(100% - ${headerHeight}px)`,
                overflow: 'auto',
              })}>
              {children}
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default withStyles({}, { withTheme: true })(CardsWrapperView);
