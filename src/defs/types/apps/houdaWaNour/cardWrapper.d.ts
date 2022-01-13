declare namespace TYPES {
  type CardWrapperProps = ThemeProps & {
    data?: SCHEMA.Category[];
    dataLength?: number;
    filters?: FiltersProps;
    loadMore?: () => void;
    buttonAdvancedSearch?: JSX.Element;
  };

  type TitleCardProps = ThemeProps &
    ClassesProps & {
      data?: SCHEMA.Category[];
      dataLength?: number;
      filters: FiltersProps;
      buttonAdvancedSearch?: JSX.Element;
    };

  type SearchItemsProps = {
    filters: FiltersProps;
  };

  type ScrollProps = {
    cardName: string;
    headerHeight: number;
    loadMore?: () => void;
  };
}
