import React from 'react';

import { Box, Button } from '@material-ui/core';
import { useTheme } from 'src/theme';

const ToggleTheme: React.FC = () => {
  const theme = useTheme();
  return (
    <Box ml={2}>
      <Button color="primary" onClick={theme.toggleTheme} variant="contained">
        Toggle theme
      </Button>
    </Box>
  );
};

export default ToggleTheme;
