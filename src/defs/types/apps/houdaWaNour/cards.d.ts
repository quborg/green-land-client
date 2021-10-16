declare namespace TYPES {
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

  type TitleCardProps = CardProps;
  type TitleCardViewProps = CardProps &
    Theme & { selectable: boolean; filters: FiltersProps; restFilters: FiltersProps };
}
