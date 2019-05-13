import { FormProps, Form } from 'redux-form';

export interface FormProps extends FormProps<any, any> {
  loading?: boolean;
}