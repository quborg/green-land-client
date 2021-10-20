declare namespace TYPES {
  type ItemsFilter = {
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
    sheikhs: ItemsFilter;
    categories: ItemsFilter;
    books: ItemsFilter;
    default: any;
  };
}
