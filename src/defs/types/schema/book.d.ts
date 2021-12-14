declare namespace SCHEMA {
  interface Book {
    _id: string;
    ID: number;
    isbn: string;
    format: string;
    title: string;
    subtitle: string;
    type: [string];
    authors: [Sheikh];
    presenters: [Sheikh];
    correctors: [Sheikh];
    categories: [Category];
    description: string;
    languages: [string];
    advice: string;
    editions: [string];
    publishers: [string];
    pages: number;
    publicationDate: string;
    saleDate: string;
    group: string;
    series: string;
    volume: number;
    related: [Book];
  }
}
