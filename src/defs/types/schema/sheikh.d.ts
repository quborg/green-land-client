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
}
