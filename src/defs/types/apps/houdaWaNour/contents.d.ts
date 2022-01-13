declare namespace TYPES {
  type ContentsViewProps = ClassesProps & {
    data: [SCHEMA.Content];
    filters: ContentsFilters;
  };
}
