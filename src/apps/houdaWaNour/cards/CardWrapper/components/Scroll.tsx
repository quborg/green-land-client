import { useCallback, useEffect, useRef } from 'react';

import { Box } from '@material-ui/core';
import { KEYS } from 'src/defs';

const Scroll: React.FC<TYPES.ScrollProps> = ({
  cardName,
  loadMore,
  headerHeight,
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback((): void => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        if (loadMore) loadMore();
      }
    }
  }, [scrollRef, loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <Box
      {...(cardName !== KEYS.search && {
        height: `calc(100% - ${headerHeight}px)`,
        overflow: 'auto',
      })}
      {...(loadMore && { onScroll, ref: scrollRef })}>
      {children}
    </Box>
  );
};

export default Scroll;
