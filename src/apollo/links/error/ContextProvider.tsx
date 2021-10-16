import React, { useState } from 'react';

import { toast } from 'material-react-toastify';
import { CONST } from 'src/defs';

const ErrorContext = React.createContext({ handleUpdateErrors: (e) => {} });

const ErrorProvider: React.FC = ({ children }) => {
  const [errors, setErrors] = useState<TYPES.ErrorsContext>(CONST.Apollo.ERRORS_INIT);

  const handleUpdateErrors: TYPES.handleUpdateErrors = (gqlErrors) => {
    setErrors(gqlErrors);
  };

  return (
    <ErrorContext.Provider value={{ handleUpdateErrors }}>
      {errors.forEach(({ message }) => toast.error(message))}
      {children}
    </ErrorContext.Provider>
  );
};

export default {
  ErrorConsumer: ErrorContext.Consumer,
  ErrorProvider,
};
