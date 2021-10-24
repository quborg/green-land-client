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

  type CardWrapperProps = CardNameProps;
  type CardWrapperViewProps = CardNameProps & {
    searchable: boolean;
    itemFilters: ItemFilters;
    restFilters: FiltersProps;
  };

  type CardBoxProps = CardNameProps;

  type CardsProps = CardNameProps;

  type SearchItemFilterProps = {
    keyword: string | undefined;
    setKeyword: (keyword: string) => void;
  };

  type TitleCardProps = CardNameProps;
  type TitleCardViewProps = CardNameProps &
    Theme & { selectable: boolean; itemFilters: ItemFilters; restFilters: FiltersProps };
}
