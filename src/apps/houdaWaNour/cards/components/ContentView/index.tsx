import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { toast } from 'material-react-toastify';
import CardWrapper from 'src/apps/houdaWaNour/cards/CardWrapper';
import KEYS from 'src/defs/keys';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const ContentView: React.FC = () => {
  const {
    data: { getContentsFilters: contentsFilters },
  } = useQuery(State.GET_CONTENTS_FILTERS);

  const {
    loading,
    error,
    data = { getContent: {} },
  } = useQuery(Query.CONTENT.CONTENT, {
    skip: !contentsFilters.selected._id,
    variables: { _id: contentsFilters.selected._id },
  });

  toast.error(error);

  const { data: chapter = { getChapterByCode: {} } } = useQuery(
    Query.CHAPTER.CHAPTER_BY_CODE,
    {
      skip: !contentsFilters.selected._id,
      variables: { code: contentsFilters.selected.code },
    }
  );

  return (
    <CardWrapper filters={{ cardName: KEYS.contentView }}>
      <Box height="100%" overflow="auto">
        {loading && <Loader loading={loading} />}
        <View {...{ data: { ...data.getContent, code: chapter.getChapterByCode } }} />
      </Box>
    </CardWrapper>
  );
};

export default ContentView;
