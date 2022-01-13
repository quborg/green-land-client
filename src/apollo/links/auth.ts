import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const { token } = JSON.parse(localStorage.getItem('user') || '{}');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export default authLink;
