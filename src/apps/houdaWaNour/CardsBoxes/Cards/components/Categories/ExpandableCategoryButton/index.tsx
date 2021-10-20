import { Box, IconButton, withStyles } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { setReactiveLocalFilters } from 'src/helpers';

import style from './style';

const ExpandableButton: React.FC<TYPES.ExpandableButtonProps> = ({
  _id,
  ID,
  child,
  level,
  all,
  selected,
  expanded,
  restFilters,
  fetchMore,
  loading,
  classes,
  theme,
}) => (
  <Box alignItems="start" className={classes.expandableButton} display="flex" mt={0.1}>
    <IconButton
      key={`${_id}-expandable`}
      onClick={() => {
        if (level < 7 && !expanded[_id] && child)
          fetchMore({ variables: { args: { filter: { parent: ID } } } });
        setReactiveLocalFilters({
          ...restFilters,
          categories: {
            all,
            selected,
            expanded: {
              ...expanded,
              [_id]: !expanded[_id],
            },
          },
        });
      }}
      size="small">
      {!child && (
        <Icons.FiberManualRecord
          style={{ fontSize: '0.65rem', paddingTop: theme.spacing(0.5) }}
        />
      )}
      {child && loading && (
        <Icons.LoopRounded className="spin" style={{ fontSize: '0.8rem' }} />
      )}
      {child &&
        level < 7 &&
        (!loading && expanded[_id] ? (
          <Icons.MinimizeRounded
            style={{ fontSize: '0.8rem', paddingBottom: theme.spacing(0.5) }}
          />
        ) : (
          <Icons.Add style={{ fontSize: '0.8rem' }} />
        ))}
    </IconButton>
  </Box>
);

export default withStyles(style, { withTheme: true })(ExpandableButton);
