declare namespace TYPES {
  type ItemsFilters = {
    all?: boolean | KEYS.indeterminate;
    selected: { [_id: string]: boolean };
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
    sheikhs: ItemsFilters;
    categories: ItemsFilters;
    books: ItemsFilters;
    default: any;
  };
}
