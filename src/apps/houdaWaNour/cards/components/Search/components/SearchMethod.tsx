import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import Tr from 'src/local';

const SearchMethod: React.FC<TYPES.SearchMethodProps> = ({ handleSearchFilters, method }) => (
  <Box flex="1">
    <FormControl>
      <FormLabel component="legend">{Tr('search method')}</FormLabel>
      <RadioGroup
        name="method"
        onChange={(e) =>
          handleSearchFilters({
            method: e.target.value as TYPES.SearchFilters['method'],
          })
        }
        value={method}>
        <FormControlLabel
          control={<Radio size="small" />}
          label={Tr('any word')}
          value="any"
        />
        <FormControlLabel
          control={<Radio size="small" />}
          label={Tr('all words')}
          value="all"
        />
        <FormControlLabel
          control={<Radio size="small" />}
          label={Tr('exact search')}
          value="exact"
        />
      </RadioGroup>
    </FormControl>
  </Box>
);

export default SearchMethod;
