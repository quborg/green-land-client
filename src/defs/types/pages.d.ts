declare namespace TYPES {
  type SignUpInputs = { name?: string; username?: string; email?: string; password?: string };

  type ResetInputs = { email?: string; phone?: string | number };

  type SignInArgs = { email?: string; password?: string };

  type SignErrors<T> = { flag?: boolean } & { [P in keyof T]: T[P] };

  type FormsTypes = {
    up: boolean;
    reset: boolean;
  };
  type FormsTypesSetStates = {
    setUp: React.Dispatch;
    setReset: React.Dispatch;
  };

  type SignViewsProps = FormsTypes;

  type SignTitleProps = ClassesProps & Theme & FormsTypes;

  type SignFooterProps = ClassesProps & Theme & FormsTypes & FormsTypesSetStates;

  type FormsInputs = SignUpInputs | ResetInputs | SignInArgs;

  type Inputs = ClassesProps & {
    inputs: FormsInputs;
    setInputs: React.Dispatch;
    errors: SignErrors<FormsInputs>;
    setErrors: ReactDispatch;
    key: string;
  };

  type Pages = {
    pageName: 'home' | 'sign' | 'profile';
  };
}
