import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'material-react-toastify';
import { CssGlobal } from 'src/theme/styles';

import 'material-react-toastify/dist/ReactToastify.css';

const CSSGlobal: React.FC = ({ children }) => (
  <>
    <CssBaseline />
    <CssGlobal />
    {children}
    <ToastContainer autoClose={5000} position="bottom-center" rtl />
  </>
);

export default CSSGlobal;
