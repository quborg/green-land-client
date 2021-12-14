declare namespace TYPES {
  type CategoriesViewProps = ClassesProps &
    ThemeProps & {
      data: [SCHEMA.Category];
      filters: CategoriesFilters;
      loading: boolean;
      networkStatus: number;
    };
  type ExpandCategoryButtonProps = ClassesProps &
    Theme & {
      _id: string;
      ID: string;
      child: boolean;
      filters: CategoriesFilters;
      loading: boolean;
      networkStatus: number;
    };
}
