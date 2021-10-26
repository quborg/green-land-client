import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

const SearchItemFilter: React.FC<TYPES.SearchItemFilterProps> = ({ keyword, setKeyword }) => (
  <TextField
    fullWidth
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <IconButton disabled size="small">
            <Icons.Search fontSize="small" />
          </IconButton>
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={() => setKeyword('')} size="small">
            <Icons.Close style={{ fontSize: '0.8rem' }} />
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
