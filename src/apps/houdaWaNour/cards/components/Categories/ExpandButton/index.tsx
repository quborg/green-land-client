import { useEffect, useState } from 'react';

import { Box, IconButton } from '@mui/material';
import { withStyles } from '@mui/styles';
import * as Icons from '@mui/icons-material';
import RVLS from 'src/rvls';

import style from './style';

const ExpandButton: React.FC<TYPES.ExpandCategoryButtonProps> = ({
  _id,
  ID,
  child,
  filters,
  loading,
  networkStatus,
  classes,
  theme,
}) => {
  const { expanded, parents, expendedId } = filters;

  return (
    <Box alignItems="start" className={classes.expandableButton} display="flex" mt={0.1}>
      <IconButton
        key={`${_id}-expandable`}
        onClick={() => {
          const nextExpanded = { ...expanded, [_id]: !expanded[_id] };
          let nextParents = [...parents];
          if (nextExpanded[_id] && child) nextParents = [...nextParents, ID];
          if (!nextExpanded[_id]) nextParents.splice(nextParents.indexOf(ID), 1);
          RVLS({
            ...filters,
            expanded: nextExpanded,
            parents: nextParents,
            expendedId: nextExpanded[_id] ? _id : '',
          });
        }}
        size="small">
        {!child && (
          <Icons.FiberManualRecord
            style={{ fontSize: '0.65rem', paddingTop: theme.spacing(0.5) }}
          />
        )}
        {child && expendedId === _id && loading && networkStatus !== 1 && (
          <Icons.LoopRounded className="spin" style={{ fontSize: '0.8rem' }} />
        )}
        {child &&
          !(expendedId === _id && loading && networkStatus !== 1) &&
          (expanded[_id] ? (
            <Icons.MinimizeRounded
              style={{ fontSize: '0.8rem', paddingBottom: theme.spacing(0.5) }}
            />
          ) : (
            <Icons.Add style={{ fontSize: '0.8rem' }} />
          ))}
      </IconButton>
    </Box>
  );
};

export default withStyles(style, { withTheme: true })(ExpandButton);
