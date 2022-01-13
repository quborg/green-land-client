declare namespace SCHEMA {
  interface Chapter {
    code: number;
    title: string;
    sheikh: Sheikh;
    book: Book;
    categories: { seq: number; category: Category }[];
    fileName: string;
    fileSize: number;
    duration: number;
    path: string;
    CDNumber: string;
    order: number;
  }
}
