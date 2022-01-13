declare namespace TYPES {
  type PlayerViewProps = ClassesProps & {
    chapter: Maybe<SCHEMA.Chapter>;
    meta: SCHEMA.Content;
  };
}
