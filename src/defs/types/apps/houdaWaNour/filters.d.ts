declare namespace TYPES {
  type ItemFilters = {
    all?: boolean | KEYS.indeterminate;
    selected?: { [_id: string]: boolean };
    expanded?: { [_id: string]: boolean };
    keyword?: string;
    openSearch?: boolean;
  };
  type FiltersProps = {
    search: {
      keyword: string;
      method: 'any' | 'all' | 'exact';
      in: 'indexing' | 'dump';
      exclude: string;
      fatwasOnly: boolean;
    };
    sheikhs: ItemFilters;
    categories: ItemFilters;
    books: ItemFilters;
    default: any;
  };
}
