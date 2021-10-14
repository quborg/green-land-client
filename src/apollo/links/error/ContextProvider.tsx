import React, { useState } from 'react';

import { ReactiveVars } from 'src/apollo';
import { CONST, KEYS } from 'src/defs';

const ErrorContext = React.createContext({ handleUpdateErrors: (e) => {} });

const ErrorProvider: React.FC = ({ children }) => {
  const [errors, setErrors] = useState<TYPES.ErrorsContext>(CONST.Apollo.ERRORS_INIT);

  const handleUpdateErrors: TYPES.handleUpdateErrors = (gqlErrors) => {
    setErrors(gqlErrors);
  };

  return (
    <ErrorContext.Provider value={{ handleUpdateErrors }}>
      {errors.forEach(({ message, errors: errors2 }) => {
        if (message) ReactiveVars.alert({ message, open: true, severity: KEYS.error });
        if (errors2) console.log('errors2', errors2);
      })}
      {children}
    </ErrorContext.Provider>
  );
};

export default {
  ErrorConsumer: ErrorContext.Consumer,
  ErrorProvider,
};
