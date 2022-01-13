import { Box, Chip, Divider } from '@mui/material';
import { withStyles } from '@mui/styles';
import Tr from 'src/local';

import style from '../style';

const ContentViewView: React.FC<TYPES.ContentViewViewProps> = ({ classes, data }) => (
  <Box px={2} py={1}>
    {data._id && (
      <>
        <Box mb={0.5}>
          {Tr('sheikh')}:{' '}
          {data.sheikh?.name && <Chip label={data.sheikh?.name} size="small" />}
        </Box>
        <Box mb={0.5}>
          {Tr('book')}: {data.book?.title && <Chip label={data.book?.title} size="small" />}
        </Box>
        <Box mb={0.5}>
          {Tr('chapter')}: {data.code?.title && <Chip label={data.code?.title} size="small" />}
        </Box>
        <Box mb={0.5}>
          {Tr('category')}:{' '}
          {data.category?.name && <Chip label={data.category?.name} size="small" />}
        </Box>
        <Divider />
      </>
    )}
    <Box>{Tr('indexing')}:</Box>
    <Box className={classes.paper}>{data.line}</Box>
  </Box>
);

export default withStyles(style)(ContentViewView);
