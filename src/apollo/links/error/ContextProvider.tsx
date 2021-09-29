import React, { useState } from 'react';

import { ReactiveVars } from 'src/apollo';
import { CONST, KEYS } from 'src/defs';
import { reactiveAlert } from 'src/helpers';

const ErrorContext = React.createContext({ handleUpdateErrors: (e) => {} });

const ErrorProvider: React.FC = ({ children }) => {
  const [errors, setErrors] = useState<TYPES.ErrorsContext>(CONST.Apollo.ERRORS_INIT);

  const handleUpdateErrors: TYPES.handleUpdateErrors = (gqlErrors) => {
    setErrors(gqlErrors);
  };

  return (
    <ErrorContext.Provider value={{ handleUpdateErrors }}>
      {errors.forEach(({ message, errors: inputsErrors }) => {
        if (message) reactiveAlert(message, KEYS.error);
        if (inputsErrors) ReactiveVars.inputsErrors(inputsErrors);
      })}
      {children}
    </ErrorContext.Provider>
  );
};

export default {
  ErrorConsumer: ErrorContext.Consumer,
  ErrorProvider,
};
