import { Box, Container } from '@mui/material';
import { withStyles } from '@mui/styles';

import style from './style';

const PlayerView: React.FC<TYPES.PlayerViewProps> = ({ chapter, meta, classes }) => (
  <Box className={classes.wrapper}>
    <Container maxWidth="xl">
      <Container maxWidth="xl">
        <audio
          preload="auto"
          controls
          src={`assets/media/houdaWaNour/${chapter?.path?.replace('\\', '/')}/${
            chapter?.fileName
          }.mp3#t=${(meta?.offsetStart || 0) / 1000}`}
        />
      </Container>
    </Container>
  </Box>
);

export default withStyles(style)(PlayerView);
