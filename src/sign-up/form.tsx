import React from 'react';
import { compose } from 'redux';
import { Form, InjectedFormProps, reduxForm } from 'redux-form';

import Button from '../components/button';
import FormField from '../components/form-elements/form-field';
import FormInput from '../components/form-elements/form-input';

import { email, maxLength, minLength } from '../helpers/form-validation';

// const minLength3 = minLength(3);
// const maxLength24 = maxLength(24);

export interface SignUpFormData {
  email: string;
  password: string;
  passwordRepeat: string;
}

type Props = InjectedFormProps<SignUpFormData>;

export const SignUpForm: React.SFC<Props> = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
        <FormField
          required
          validate={email}
          type="email"
          name="email"
          component={FormInput}
          placeholder="Email address"
        />
        <FormField required name="password" component={FormInput} type="password" placeholder="Password" />
        <FormField required name="passwordRepeat" component={FormInput} type="password" placeholder="Repeat password" />
        <Button text="Sign up" type="submit" appearance="submit" fullWidth />
    </Form>
  );
};

export const validate = (values: SignUpFormData) => {
  const errors: Partial<SignUpFormData> = {};

  if (values.password !== values.passwordRepeat) {
    errors.passwordRepeat = `Those passwords didn't match. Try again.`;
  }
  return errors;
};

export default compose(
  reduxForm({
    form: 'SIGNUP_FORM',
    validate,
  }),
)(SignUpForm);
