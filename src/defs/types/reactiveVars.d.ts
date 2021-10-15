declare namespace TYPES {
  type SelectableEntities = SCHEMA.Sheikh[] | SCHEMA.Book[] | SCHEMA.Category[];

  type RvDataProps = {
    categories: SCHEMA.Category[];
  };
}
