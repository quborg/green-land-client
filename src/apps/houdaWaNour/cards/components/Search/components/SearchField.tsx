import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

const SearchField: React.FC<TYPES.SearchFieldProps> = ({ handleSearchFilters, keyword }) => (
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
          <IconButton onClick={() => handleSearchFilters({ keyword: '' })} size="small">
            <Icons.Close fontSize="small" />
          </IconButton>
        </InputAdornment>
      ),
    }}
    onChange={(e) => handleSearchFilters({ keyword: e.target.value })}
    placeholder=".."
    value={keyword}
  />
);

export default SearchField;
