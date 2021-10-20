declare namespace TYPES {
  type HandleSearchFilters = (nextSearch: MaybeIn<FiltersProps['search']>) => void;

  type SearchFieldProps = {
    keyword: FiltersProps['search']['keyword'];
    handleSearchFilters: HandleSearchFilters;
  };

  type ControlAdvancedSearchProps = ThemeProps & {
    setAdvancedSearch: React.Dispatch;
    handleSearchFilters: HandleSearchFilters;
  };

  type SearchMethodProps = {
    method: FiltersProps['search']['method'];
    handleSearchFilters: HandleSearchFilters;
  };

  type SearchInProps = {
    searchIn: FiltersProps['search']['in'];
    handleSearchFilters: HandleSearchFilters;
  };
}
