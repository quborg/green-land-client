import { CssBaseline } from '@material-ui/core';
import { CssGlobal } from 'src/theme/styles';

import Alert from '../Alert';

const CSSGlobal: React.FC = ({ children }) => (
  <>
    <CssBaseline />
    <CssGlobal />
    {children}
    <Alert />
  </>
);

export default CSSGlobal;
