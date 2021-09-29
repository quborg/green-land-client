import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignIn($args: SignInArgs) {
    signIn(args: $args) {
      _id
      name
      username
      email
      token
      avatar {
        path
      }
      role
      public
      active
      verified
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($inputs: SignUpInputs) {
    signUp(inputs: $inputs) {
      _id
      name
      username
      email
      token
      avatar {
        path
      }
      role
      public
      active
      verified
    }
  }
`;

export const RESET = gql`
  mutation ResetPassword($inputs: ResetPasswordInputs) {
    resetPassword(inputs: $inputs)
  }
`;

export const UPDATE = gql`
  mutation EditUser($inputs: UserInputs) {
    editUser(inputs: $inputs) {
      _id
      name
      username
      email
      token
      avatar {
        path
      }
      role
      public
      active
      verified
    }
  }
`;

export const DELETE = gql`
  mutation DeleteUser($_id: ID!) {
    deleteUser(_id: $_id)
  }
`;
