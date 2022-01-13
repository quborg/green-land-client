import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box, IconButton } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { withStyles } from '@mui/styles';
import { Query } from 'src/graphql';
import { Local as Tr } from 'src/local';
import RVLS from 'src/rvls';

import style1 from '../style';
import ExpandButton from './ExpandButton';
import { getNextAll } from './helper';
import style2 from './style';

const ChaptersView: React.FC<TYPES.ChaptersViewProps> = ({
  titles,
  filters,
  classes,
  theme,
}) => {
  const [expandedTitles] = useState(
    Object.keys(filters.expanded).filter((title) => filters.expanded[title])
  );
  const [expandedSheikhs] = useState(
    Object.keys(filters.expanded).filter(
      (title) => title.includes(',') && filters.expanded[title]
    )
  );

  const [
    {
      loading: loadingS,
      networkStatus: networkStatusS,
      data: dataS = { getSheikhsChaptersByTitle: [] },
      fetchMore: fetchMoreS,
    },
    {
      loading: loadingC,
      networkStatus: networkStatusC,
      data: dataC = { getChaptersSheikhByTitle: [] },
      fetchMore: fetchMoreC,
    },
  ] = [
    useQuery(Query.CHAPTER.SHEIKHS_CHAPTERS_BY_TITLE, {
      variables: { args: { titles: expandedTitles } },
      notifyOnNetworkStatusChange: true,
    }),
    useQuery(Query.CHAPTER.CHAPTERS_SHEIKH_BY_TITLE, {
      variables: { args: { titles: expandedSheikhs } },
      notifyOnNetworkStatusChange: true,
    }),
  ];

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
            <ExpandButton
              {...{
                id: title,
                filters,
                loading: loadingS,
                networkStatus: networkStatusS,
                fetchMore: () =>
                  fetchMoreS({
                    variables: { args: { titles: [title] } },
                  }),
              }}
            />
            <Box onClick={() => handleItemClick(title)}>{title}</Box>
          </Box>
          {filters.expanded[title] && (
            <Box className={`${classes.selectableItemWrapper} child-wrapper`} mr={1}>
              {dataS.getSheikhsChaptersByTitle
                .filter(({ title: byTitle }) => title === byTitle)
                .map(({ sheikhs }) =>
                  sheikhs.map(({ _id, name }) => (
                    <Box key={_id}>
                      <Box
                        className={`${classes.passiveItem}${
                          filters.expanded[[title, _id].join(',')] ? ' expanded' : ''
                        }`}
                        display="flex"
                        px={0.5}
                        py={0.3}>
                        <ExpandButton
                          {...{
                            id: [title, _id].join(','),
                            filters,
                            loading: loadingC,
                            networkStatus: networkStatusC,
                            fetchMore: () =>
                              fetchMoreC({
                                variables: { args: { titles: [[title, _id].join(',')] } },
                              }),
                          }}
                        />
                        <Box>{name}</Box>
                      </Box>
                      {filters.expanded[[title, _id].join(',')] && (
                        <Box
                          className={`${classes.selectableItemWrapper} child-wrapper`}
                          mr={1}>
                          {dataC.getChaptersSheikhByTitle
                            .filter(({ title: t, sheikh: s }) => title === t && _id === s)
                            .map(({ chapters }) =>
                              chapters.map(({ fileName, ...chapter }) => (
                                <Box
                                  className={`${classes.selectableItem}${
                                    filters.chapter.fileName === fileName ? ' selected' : ''
                                  }`}
                                  key={`${title}:${_id}:${fileName}`}
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
                                  py={0.1}>
                                  <IconButton size="small">
                                    <Icons.FiberManualRecord
                                      style={{
                                        fontSize: '0.65rem',
                                        paddingTop: theme.spacing(0.4),
                                      }}
                                    />
                                  </IconButton>
                                  {`${Tr.chapter} ${fileName}`}
                                </Box>
                              ))
                            )}
                        </Box>
                      )}
                    </Box>
                  ))
                )}
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default withStyles((theme) => ({ ...style1(theme), ...style2(theme) }), {
  withTheme: true,
})(ChaptersView);
