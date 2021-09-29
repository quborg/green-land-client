declare namespace TYPES {
  type LayoutProps = Theme;
  type AppProps = ClassesProps;
  type ComponentsProps = { cName: string };
  type ComponentProps = { cName: string };
  type SheikhsProps = ClassesProps;
  type CategoriesProps = ClassesProps & Theme;
  type ExpandableItemsProps = ClassesProps &
    Theme & { parent: number; data: SCHEMA.Category[] };
  type CardProps = { title: string } & Theme;
  type TopBarProps = ClassesProps;

  type ItemsFilter = {
    all: boolean | '';
    selected: {
      [_id: string]: boolean;
    };
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
    categories: ItemsFilter & { expanded: ItemsFilter['selected'] };
    books: ItemsFilter;
    default: any;
  };

  type SelectableEntities = SCHEMA.Sheikh[] | SCHEMA.Book[] | SCHEMA.Category[];

  interface ExpandedStateProps {
    expanded: { [_id: string]: boolean };
    setExpanded: React.Dispatch;
  }

  type DataProps = {
    categories: SCHEMA.Category[];
  };
}
