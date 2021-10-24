declare namespace TYPES {
  type CategoriesViewProps = ClassesProps &
    ThemeProps &
    TFetchMore & { data: [SCHEMA.Category]; filters: FiltersProps; loading: boolean };
  type ExpandableButtonProps = ClassesProps &
    Theme & {
      _id: string;
      ID: string;
      child: boolean;
      level: number;
      all: ItemFilters['all'];
      selected: ItemFilters['selected'];
      expanded: ItemFilters['expanded'];
      restFilters: any;
      fetchMore: TFetchMore;
      loading: boolean;
    };
}
