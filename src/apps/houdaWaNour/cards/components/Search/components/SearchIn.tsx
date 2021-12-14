import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import Tr from 'src/local';

const SearchIn: React.FC<TYPES.SearchInProps> = ({ handleSearchFilters, searchIn }) => (
  <Box flex="1">
    <FormControl>
      <FormLabel component="legend">{Tr('search in')}</FormLabel>
      <RadioGroup
        name="in"
        onChange={(e) =>
          handleSearchFilters({
            in: e.target.value as TYPES.SearchFilters['in'],
          })
        }
        value={searchIn}>
        <FormControlLabel
          control={<Radio size="small" />}
          label={Tr('indexing')}
          value="indexing"
        />
        <FormControlLabel control={<Radio size="small" />} label={Tr('dump')} value="dump" />
      </RadioGroup>
    </FormControl>
  </Box>
);

export default SearchIn;
