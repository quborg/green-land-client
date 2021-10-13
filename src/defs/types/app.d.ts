declare namespace TYPES {
  import { KEYS } from 'src/defs';

  type LayoutProps = Theme;
  type AppProps = ClassesProps;

  type CardNameType =
    | KEYS.search
    | KEYS.books
    | KEYS.sheikhs
    | KEYS.categories
    | KEYS.indexes
    | KEYS.indexView
    | KEYS.dump;
  type CardProps = { cardName: CardNameType };
  type CardBoxProps = CardProps;
  type CardsProps = CardProps;

  type TitleCardProps = CardProps & Theme;
  type ItemsFilter = {
    all: boolean | KEYS.indeterminate;
    selected?: { [_id: string]: boolean };
    expanded?: { [_id: string]: boolean };
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

  type SheikhsProps = ClassesProps;
  type CategoriesProps = ClassesProps & Theme;
  type ExpandableButtonProps = ClassesProps &
    Theme & {
      _id: string;
      ID: string;
      child: boolean;
      level: number;
      all: ItemsFilter['all'];
      selected: ItemsFilter['selected'];
      expanded: ItemsFilter['expanded'];
      restFilters: any;
      fetchMore: TFetchMore;
      loading: boolean;
    };
  type ExpandableItemsProps = ClassesProps &
    Theme & { parent: number; data: SCHEMA.Category[] };
  type TopBarProps = ClassesProps;

  interface ExpandedStateProps {
    expanded: { [_id: string]: boolean };
    setExpanded: React.Dispatch;
  }

  type SelectableEntities = SCHEMA.Sheikh[] | SCHEMA.Book[] | SCHEMA.Category[];

  type DataProps = {
    categories: SCHEMA.Category[];
  };
}
