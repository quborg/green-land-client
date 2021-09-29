import { Box, TextField, Typography } from '@material-ui/core';
import MuiImage from 'material-ui-image';
import { CONST } from 'src/defs';

const Image: React.FC<TYPES.ImageProps> = ({
  aspectRatio,
  editable,
  height,
  label,
  onChange,
  src,
  width,
}) => {
  const PrincipalComponent: React.FC = () => (
    <Box borderRadius={3} boxShadow={1} height={height} overflow="hidden" width={width}>
      <MuiImage
        aspectRatio={aspectRatio}
        imageStyle={{ width, height }}
        src={src || CONST.Theme.srcDefaultAvatar}
      />
    </Box>
  );

  return (
    <Box alignItems="center" display="flex">
      {label ? (
        <Box
          border={1}
          borderColor="grey.400"
          borderRadius="borderRadius"
          p={label ? 1 : 0}
          position="relative">
          <Box
            bgcolor="white"
            color={editable ? 'grey.600' : 'grey.500'}
            p="0 5px"
            position="absolute"
            top={-12}>
            <Typography component="span" variant="caption">
              {label}
            </Typography>
          </Box>
          <PrincipalComponent />
        </Box>
      ) : (
        <PrincipalComponent />
      )}
      {editable ? (
        <Box ml={2} width={1}>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: Boolean(src) }}
            label="Image URL"
            onChange={onChange}
            type="url"
            value={src || ''}
            variant="outlined"
          />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

Image.defaultProps = {
  width: '35px',
  height: '35px',
  src: '',
  editable: false,
};

export default Image;
