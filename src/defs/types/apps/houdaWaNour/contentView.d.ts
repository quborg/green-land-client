declare namespace TYPES {
  interface ContentChapter extends SCHEMA.Content {
    code: SCHEMA.Chapter;
  }

  type ContentViewViewProps = ClassesProps & {
    data: ContentChapter;
  };
}
