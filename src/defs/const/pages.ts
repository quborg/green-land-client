export const INIT_SIGN: { [k: string]: TYPES.FormsInputs } = {
  UP: {
    name: '',
    username: '',
    email: '',
    password: '',
  },
  IN: {
    email: '',
    password: '',
  },
  RESET: {
    email: '',
    phone: '',
  },
};

export const INPUT_TYPES = {
  name: () => 'text',
  username: () => 'text',
  email: () => 'email',
  password: (b: boolean) => (b ? 'text' : 'password'),
  phone: () => 'phone',
};

export default {};
