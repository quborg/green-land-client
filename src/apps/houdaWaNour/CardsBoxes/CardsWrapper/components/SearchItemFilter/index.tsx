import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

const SearchItemFilter: React.FC<TYPES.SearchItemFilterProps> = ({ keyword, setKeyword }) => (
  <TextField
    focused
    fullWidth
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Icons.Search fontSize="small" />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={() => setKeyword('')}>
            <Icons.Close fontSize="small" />
          </IconButton>
        </InputAdornment>
      ),
    }}
    onChange={(e) => setKeyword(e.target.value)}
    placeholder=".."
    value={keyword}
  />
);

export default SearchItemFilter;
