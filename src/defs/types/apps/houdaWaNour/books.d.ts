declare namespace TYPES {
  type BooksProps = ClassesProps;
  type BooksViewProps = ClassesProps & { data: [SCHEMA.Book]; filters: FiltersProps };
}
