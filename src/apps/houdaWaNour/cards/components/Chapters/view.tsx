import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box, withStyles } from '@material-ui/core';
import { toast } from 'material-react-toastify';
import { Query } from 'src/graphql';
import { Local as Tr } from 'src/local';
import RVLS from 'src/rvls';

import style1 from '../style';
import ExpandButton from './ExpandButton';
import { compare2arrays, getNextAll } from './helper';
import style2 from './style';

const ChaptersView: React.FC<TYPES.ChaptersViewProps> = ({ classes, titles, filters }) => {
  const [expandedTitles, setExpandedTitles] = useState(
    Object.keys(filters.expanded).filter((title) => filters.expanded[title])
  );

  const {
    loading,
    networkStatus,
    error,
    data = { getChaptersByTitle: [{ chapters: [] }] },
    refetch,
  } = useQuery(Query.CHAPTER.CHAPTERS_BY_TITLE, {
    variables: { args: { titles: expandedTitles } },
    notifyOnNetworkStatusChange: true,
  });

  toast.error(error);

  useEffect(() => {
    if (!compare2arrays(expandedTitles, filters.expanded)) {
      const nextExpandedTitles = Object.keys(filters.expanded).filter(
        (title) => filters.expanded[title]
      );
      setExpandedTitles(nextExpandedTitles);
      refetch({ args: { titles: nextExpandedTitles } });
    }
  }, [expandedTitles, filters, refetch]);

  const handleItemClick = (title: string): void => {
    const { all, selected } = filters;
    const nextSelected = { ...selected, [title]: !selected[title] };
    const nextAll = getNextAll(all, nextSelected, titles);
    RVLS({
      ...filters,
      all: nextAll,
      selected: nextSelected,
    });
  };

  return (
    <>
      {titles.map((title) => (
        <Box key={title}>
          <Box
            className={`${classes.selectableItem}${
              filters.selected[title] ? ' selected' : ''
            }${filters.expanded[title] ? ' expanded' : ''}`}
            display="flex"
            px={0.5}
            py={0.3}>
            <ExpandButton {...{ title, filters, loading, networkStatus }} />
            <Box onClick={() => handleItemClick(title)}>{title}</Box>
          </Box>
          {filters.expanded[title] && (
            <Box className={`${classes.selectableItemWrapper} child-wrapper`} ml={1}>
              {data.getChaptersByTitle
                .filter(({ title: byTitle }) => title === byTitle)
                .map(({ chapters }) =>
                  chapters.map(({ fileName, ...chapter }) => (
                    <Box
                      className={`${classes.selectableItem}${
                        filters.chapter.fileName === fileName ? ' selected' : ''
                      }`}
                      key={`${title}:${fileName}`}
                      onClick={() =>
                        RVLS({
                          ...filters,
                          chapter:
                            filters.chapter.fileName === fileName
                              ? {}
                              : { fileName, ...chapter },
                        })
                      }
                      px={0.5}
                      py={0.1}>{`${Tr.chapter} ${fileName}`}</Box>
                  ))
                )}
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default withStyles((theme) => ({ ...style1(theme), ...style2(theme) }))(ChaptersView);
