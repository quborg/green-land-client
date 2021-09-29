declare namespace SCHEMA {
  interface Sheikh {
    _id: string;
    ID: number;
    name: string;
    order: number;
    additionalNames: [string];
    country: string;
    affiliations: [CheikhAffiliation];
    professions: [string];
    role: [string];
    birthDate: string;
    email: string;
    jobTitle: string;
    accomplishments: [string];
    achievements: [string];
  }

  interface CheikhAffiliation {
    affiliation: Affiliation;
    role: string;
    description: string;
  }

  interface Affiliation {
    name: string;
    address: string;
    email: string;
    country: string;
    description: string;
  }

  interface Book {
    _id: string;
    ID: number;
    isbn: string;
    format: string;
    title: string;
    subtitle: string;
    type: Type;
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

  interface Category {
    _id: string;
    ID: number;
    name: string;
    order: number;
    parent: number;
    child: boolean;
    parentRef: Category;
    level: number;
    description: string;
  }
}
