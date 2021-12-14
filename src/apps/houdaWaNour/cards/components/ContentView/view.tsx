import { Box, Chip, Divider, withStyles } from '@material-ui/core';
import Tr from 'src/local';

import style from '../style';

const ContentViewView: React.FC<TYPES.ContentViewViewProps> = ({ classes, data }) => (
  <Box px={2} py={1}>
    {data._id ? (
      <>
        <Box mb={0.5}>
          {Tr('sheikh')}: <Chip label={data.sheikh?.name} size="small" />
        </Box>
        <Box mb={0.5}>
          {Tr('book')}: <Chip label={data.book?.title} size="small" />
        </Box>
        <Box mb={0.5}>
          {Tr('chapter')}: <Chip label={data.code?.title} size="small" />
        </Box>
        <Box mb={0.5}>
          {Tr('category')}: <Chip label={data.category?.name} size="small" />
        </Box>
        <Divider />
      </>
    ) : (
      <></>
    )}
    <Box>{Tr('indexing')}:</Box>
    <Box className={classes.paper}>{data.line}</Box>
  </Box>
);

export default withStyles(style)(ContentViewView);
