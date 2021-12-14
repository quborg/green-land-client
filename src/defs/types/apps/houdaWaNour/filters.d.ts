declare namespace TYPES {
  type FiltersProps = MaybeIn<
    SearchFilters,
    SheikhsFilters,
    BooksFilters,
    CategoriesFilters,
    ChaptersFilters,
    ContentsFilters
  >;

  type SearchFilters = {
    cardName: string;
    keyword: string;
    method: 'any' | 'all' | 'exact';
    in: 'indexing' | 'dump';
    exclude: string;
    fatwasOnly: boolean;
  };

  type SheikhsFilters = {
    cardName: string;
    selectableAll: boolean;
    all: boolean | KEYS.indeterminate;
    selected: { [_id: string]: boolean };
  };

  type BooksFilters = {
    cardName: string;
    selectableAll: boolean;
    all: boolean | KEYS.indeterminate;
    selected: { [_id: string]: boolean };
    searchableItems: boolean;
    openSearch: boolean;
    keyword: string;
  };

  type CategoriesFilters = {
    cardName: string;
    selectableAll: boolean;
    all: boolean | KEYS.indeterminate;
    selected: { [_id: string]: boolean };
    expanded: { [_id: string]: boolean };
    parents: number[];
    expendedId: string;
  };

  type ChaptersFilters = {
    cardName: string;
    selected: { [title: string]: boolean };
    expanded: { [title: string]: boolean };
    chapter: TYPES.Maybe<SCHEMA.Chapter>;
    expandedTitle: string;
    selectableAll: boolean;
    all: boolean | KEYS.indeterminate;
    searchableItems: boolean;
    openSearch: boolean;
    keyword: string;
    count: number;
  };

  type ContentsFilters = {
    cardName: string;
    count: number;
    selected: MaybeIn<SCHEMA.Content>;
  };

  type ContentViewFilters = {
    cardName: string;
    selected: MaybeIn<SCHEMA.Content>;
  };
}
