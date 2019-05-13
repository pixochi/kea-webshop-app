import React from 'react';
import { compose } from 'redux';
import { Form, InjectedFormProps, reduxForm } from 'redux-form';

import Button from '../components/button';
import FormField from '../components/form-elements/form-field';
import FormInput from '../components/form-elements/form-input';

import { FormProps } from '../components/form-elements/typings';

type Props = InjectedFormProps<{implementThis: any}> & FormProps;

export const LoginForm: React.SFC<Props> = props => {
  const { handleSubmit, loading } = props;

  return (
    <Form onSubmit={handleSubmit}>
        <FormField required name="email" component={FormInput} placeholder="Email address" />
        <FormField required name="password" component={FormInput} type="password" placeholder="Password" />
        <Button loading={loading} text="Log in" type="submit" appearance="submit" fullWidth/>
    </Form>
  );
};

export default compose<React.ComponentType<FormProps>>(
  reduxForm({
    form: 'LOGIN_FORM',
  }),
)(LoginForm);
