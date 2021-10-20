import { useEffect, useRef, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import { toast } from 'material-react-toastify';
import { Query, State } from 'src/graphql';
import { Loader } from 'src/theme/components';

import View from './view';

const Books: React.FC = () => {
  const boxHeight = useRef<HTMLDivElement>(null);
  const [boxH, setBoxH] = useState<any>('100%');

  const {
    data: { filters },
  } = useQuery(State.FILTERS);

  const { loading, error, data = { getBooks: [] } } = useQuery(Query.BOOK.BOOKS);

  toast.error(error);

  useEffect(() => {
    setBoxH(boxHeight?.current?.clientHeight);
  }, [boxHeight]);

  // useEffect(() => {
  //   const boxH = boxHeight?.current?.clientHeight;
  //   const titleH = titleHeight?.current?.clientHeight;
  //   const searchH = searchHeight?.current?.clientHeight || 0;
  //   if (boxH && titleH) {
  //     setListHeight(boxH - titleH - searchH - 16);
  //   }
  // }, [searchHeight, listHeight]);

  return (
    <Box minHeight={boxH} overflow="hidden" {...{ ref: boxHeight }}>
      <Box overflow="auto">
        {loading && <Loader loading={loading} />}
        <View {...{ data: data.getBooks, filters }} />
      </Box>
    </Box>
  );
};

export default Books;
