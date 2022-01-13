import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Query, State } from 'src/graphql';

import View from './view';

const Player: React.FC = () => {
  const [
    {
      data: {
        getChaptersFilters: { chapter: chapterFilters = {} },
      },
    },
    {
      data: {
        getContentsFilters: { selected: contentFilters = {} },
      },
    },
  ] = [useQuery(State.GET_CHAPTERS_FILTERS), useQuery(State.GET_CONTENTS_FILTERS)];

  const [chapterId, setChapterId] = useState(chapterFilters._id);
  const [chapterMeta, setChapterMeta] = useState(contentFilters);
  const [chapter, setChapter] = useState({ _id: '' });

  const [
    { data: chapterById = { getChapter: {} }, refetch: refetchById },
    { data: chapterByCode = { getChapterByCode: {} }, refetch: refetchByCode },
  ] = [
    useQuery(Query.CHAPTER.CHAPTER, {
      skip: !chapterId,
      variables: { _id: chapterId },
    }),
    useQuery(Query.CHAPTER.CHAPTER_BY_CODE, {
      skip: !chapterMeta.code,
      variables: { code: chapterMeta.code },
    }),
  ];

  useEffect(() => {
    const byIdID = chapterById.getChapter._id;
    const byCodeID = chapterByCode.getChapterByCode._id;
    if (byCodeID && byCodeID !== chapter._id) setChapter(chapterByCode.getChapterByCode);
    else if (!byCodeID && byIdID && byIdID !== chapter._id) {
      setChapter(chapterById.getChapter);
    }
  }, [chapter, chapterById, chapterByCode]);

  useEffect(() => {
    if (contentFilters._id !== chapterMeta._id) {
      setChapterMeta(contentFilters);
      if (contentFilters.code) refetchByCode({ code: contentFilters.code });
    }
    if (chapterFilters._id !== chapterId) {
      setChapterId(chapterFilters._id);
      if (chapterFilters._id) refetchById({ _id: chapterFilters._id });
    }
  }, [contentFilters, chapterFilters, chapterId, chapterMeta, refetchById, refetchByCode]);

  return <View chapter={chapter} meta={chapterMeta} />;
};

export default Player;
