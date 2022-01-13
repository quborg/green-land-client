declare namespace SCHEMA {
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
