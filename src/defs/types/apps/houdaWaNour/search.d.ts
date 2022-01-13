declare namespace TYPES {
  type HandleSearchFilters = (nextSearch: MaybeIn<SearchFilters>) => void;

  type SearchFieldProps = {
    keyword: string;
    handleSearchFilters: HandleSearchFilters;
  };

  type ControlAdvancedSearchProps = ThemeProps & {
    setIsAdvancedSearch: React.Dispatch;
    handleSearchFilters: HandleSearchFilters;
  };

  type SearchMethodProps = {
    method: SearchFilters['method'];
    handleSearchFilters: HandleSearchFilters;
  };

  type SearchInProps = {
    searchIn: SearchFilters['in'];
    handleSearchFilters: HandleSearchFilters;
  };
}
