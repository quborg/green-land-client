import { Box, withStyles } from '@material-ui/core';
import RVLS from 'src/rvls';

import style1 from '../style';
import style2 from './style';

const ContentsView: React.FC<TYPES.ContentsViewProps> = ({ classes, data, filters }) => {
  const handleItemClick = (content: SCHEMA.Content): void => {
    RVLS({ ...filters, selected: content });
  };

  return (
    <>
      {data.map((content) => (
        <Box
          className={`${classes.selectableItem}${
            filters.selected._id === content._id ? ` selected ${classes.selected2}` : ''
          } ${classes.ellipsis}`}
          key={content._id}
          onClick={() => handleItemClick(content)}
          px={0.5}
          py={0.3}>
          {content.line}
        </Box>
      ))}
    </>
  );
};

export default withStyles((theme) => ({ ...style1(theme), ...style2(theme) }))(ContentsView);
