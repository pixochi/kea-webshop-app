import React from 'react';
import { compose } from 'redux';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { LocalDate } from 'js-joda';

import Button from '../components/button';
import FormField from '../components/form-elements/form-field';
import FormInput from '../components/form-elements/form-input';
import FormCheckbox from '../components/form-elements/checkbox/form-checkbox';
import Form from '../components/form-elements/form';

import { email, maxLength, minLength } from '../helpers/form-validation';

export interface CheckoutFormData {
  email: string;
  password: string;
  passwordRepeat: string;
}

type Props = InjectedFormProps<CheckoutFormData>;

export const CheckoutForm: React.SFC<Props> = props => {
  const { handleSubmit } = props;

  return (
    <Form
      onSubmit={handleSubmit}
      submitButtonText="Confirm"
    >
      <FormField
        name="firstName"
        component={FormInput}
        labelText="First name"
        required
      />
      <FormField
        name="lastName"
        component={FormInput}
        labelText="Last name"
        required
      />
      <FormField
        name="town"
        component={FormInput}
        labelText="Town"
        required
      />
      <FormField
        name="postcode"
        component={FormInput}
        labelText="Postcode"
        required
      />
      <FormField
        name="street"
        component={FormInput}
        labelText="Street"
        required
      />
      <FormField
        name="phoneNumber"
        component={FormInput}
        labelText="Phone number"
        type="number"
      />
      <FormField
        name="email"
        component={FormInput}
        labelText="Email"
        validate={email}
      />
      <FormField
        name="birthDate"
        component={FormInput}
        labelText="Birthdate"
        type="date"
        max={LocalDate.now().toString()}
        required
      />
      <FormField
        name="deliveryDate"
        component={FormInput}
        labelText="Delivery date"
        type="date"
        min={LocalDate.now().toString()}
        required
      />
      <FormField
        name="isStudent"
        component={FormCheckbox}
        labelText="I am a student"
        defaultChecked={false}
        isHorizontal
      />
      <FormField
        name="cardExpiration"
        component={FormInput}
        labelText="Credit card expiration date"
        type="date"
        required
      />
    </Form>
  );
};

export const validate = (values: CheckoutFormData) => {
  const errors: Partial<CheckoutFormData> = {};

  if (values.password !== values.passwordRepeat) {
    errors.passwordRepeat = `Those passwords didn't match. Try again.`;
  }
  return errors;
};

export default compose(
  reduxForm({
    form: 'CHECKOUT_FORM',
    validate,
  }),
)(CheckoutForm);
