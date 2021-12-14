import { IconButton, withStyles } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import RVLS from 'src/rvls';

const ExpandButton: React.FC<TYPES.ExpandChapterButtonProps> = ({
  title,
  filters,
  loading,
  networkStatus,
  theme,
}) => {
  const { expanded, expandedTitle, chapter } = filters;

  return (
    <IconButton
      onClick={() => {
        const nextExpanded = { ...expanded, [title]: !expanded[title] };
        RVLS({
          ...filters,
          expanded: nextExpanded,
          expandedTitle: nextExpanded[title] ? title : '',
          chapter: nextExpanded[title] ? chapter : {},
        });
      }}
      size="small">
      {expandedTitle === title && loading && networkStatus !== 1 && (
        <Icons.LoopRounded className="spin" style={{ fontSize: '0.8rem' }} />
      )}
      {!(expandedTitle === title && loading && networkStatus !== 1) &&
        (filters.expanded[title] ? (
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
