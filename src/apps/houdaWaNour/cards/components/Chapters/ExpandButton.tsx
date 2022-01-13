import { useEffect, useState } from 'react';

import { IconButton } from '@mui/material';
import { withStyles } from '@mui/styles';
import * as Icons from '@mui/icons-material';
import RVLS from 'src/rvls';

const ExpandButton: React.FC<TYPES.ExpandChapterButtonProps> = ({
  id,
  filters,
  loading,
  networkStatus,
  fetchMore,
  theme,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { expanded } = filters;

  useEffect(() => {
    if (isLoading && !loading && networkStatus !== 1) setIsLoading(false);
  }, [isLoading, loading, networkStatus]);

  return (
    <IconButton
      onClick={() => {
        const nextExpanded = { ...expanded, [id]: !expanded[id] };
        RVLS({ ...filters, expanded: nextExpanded });
        if (nextExpanded[id]) {
          setIsLoading(true);
          fetchMore();
        }
      }}
      size="small">
      {isLoading && <Icons.LoopRounded className="spin" style={{ fontSize: '0.8rem' }} />}
      {!isLoading &&
        (filters.expanded[id] ? (
          <Icons.MinimizeRounded
            style={{ fontSize: '0.8rem', paddingBottom: theme.spacing(0.5) }}
          />
        ) : (
          <Icons.Add style={{ fontSize: '0.8rem' }} />
        ))}
    </IconButton>
  );
};

export default withStyles({}, { withTheme: true })(ExpandButton);
