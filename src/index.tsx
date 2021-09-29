import ReactDOM from 'react-dom';

import ApolloClientProvider from 'src/apollo';
import ReactRouterProvider from 'src/router';
import MuiThemeProvider from 'src/theme';

ReactDOM.render(
  <ApolloClientProvider>
    <MuiThemeProvider>
      <ReactRouterProvider />
    </MuiThemeProvider>
  </ApolloClientProvider>,
  document.getElementById('root')
);
