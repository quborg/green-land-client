declare namespace TYPES {
  type ChaptersViewProps = ClassesProps & { titles: [string]; filters: ChaptersFilters };

  type ExpandChapterButtonProps = ThemeProps & {
    title: string;
    filters: ChaptersFilters;
    loading: boolean;
    networkStatus: number;
  };
}
