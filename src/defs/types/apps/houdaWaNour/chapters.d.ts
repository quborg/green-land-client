declare namespace TYPES {
  type ChaptersViewProps = ClassesProps &
    ThemeProps & { titles: [string]; filters: ChaptersFilters };

  type ExpandChapterButtonProps = ThemeProps &
    TFetchMore & {
      id: string;
      filters: ChaptersFilters;
      loading: boolean;
      networkStatus: number;
    };
}
