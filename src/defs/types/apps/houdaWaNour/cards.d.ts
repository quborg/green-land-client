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
    searchableItems: boolean;
    itemFilters: ItemsFilters;
    restFilters: FiltersProps;
  };

  type CardBoxProps = CardNameProps;

  type CardsProps = CardNameProps;

  type SearchItemFilterProps = {
    keyword: string | undefined;
    setKeyword: (keyword: string) => void;
  };

  type TitleCardProps = CardNameProps & { searchableItems: boolean };
  type TitleCardViewProps = CardNameProps &
    Theme & {
      selectableAll: boolean;
      searchableItems: boolean;
      itemFilters: ItemsFilters;
      restFilters: FiltersProps;
      categoriesData0: SCHEMA.Category[];
    };
}
