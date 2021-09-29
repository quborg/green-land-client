declare namespace SCHEMA {
  type ReactiveAction = {
    _id?: string;
    type?: 'delete' | 'update' | string;
  };

  type Image = {
    path: string;
    filename: string;
    mimetype: string;
  };
}
