declare namespace TYPES {
  type CardWrapperProps = {
    data?: SCHEMA.Category[];
    dataLength?: number;
    filters?: FiltersProps;
    loadMore?: () => void;
  };

  type TitleCardProps = ThemeProps &
    ClassesProps & {
      data?: SCHEMA.Category[];
      dataLength?: number;
      filters: FiltersProps;
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
