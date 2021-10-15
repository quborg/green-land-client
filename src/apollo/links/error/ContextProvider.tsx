import React, { useState } from 'react';

import { CONST, KEYS } from 'src/defs';
import { Alert } from 'src/theme/components';

const ErrorContext = React.createContext({ handleUpdateErrors: (e) => {} });

const ErrorProvider: React.FC = ({ children }) => {
  const [errors, setErrors] = useState<TYPES.ErrorsContext>(CONST.Apollo.ERRORS_INIT);

  const handleUpdateErrors: TYPES.handleUpdateErrors = (gqlErrors) => {
    setErrors(gqlErrors);
  };

  return (
    <ErrorContext.Provider value={{ handleUpdateErrors }}>
      {errors.map(({ message }) => (
        <Alert key={message} message={message} open severity={KEYS.error} />
      ))}
      {children}
    </ErrorContext.Provider>
  );
};

export default {
  ErrorConsumer: ErrorContext.Consumer,
  ErrorProvider,
};
