declare namespace TYPES {
  type CardNameType =
    | KEYS.search
    | KEYS.books
    | KEYS.sheikhs
    | KEYS.categories
    | KEYS.indexes
    | KEYS.indexView
    | KEYS.dump;
  type CardNameProps = { cardName: CardNameType };
  type CardBoxProps = CardNameProps;
  type CardsProps = CardNameProps;

  type SearchItemFilterProps = {
    keyword: string;
    setKeyword: (keyword: string) => void;
  };

  type TitleCardProps = CardNameProps;
  type TitleCardViewProps = CardNameProps &
    Theme & { selectable: boolean; filters: FiltersProps; restFilters: FiltersProps };
}
