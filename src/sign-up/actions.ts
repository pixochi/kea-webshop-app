import {createActions} from '../redux/create-actions';

const domain = 'SIGN_UP';

export const {
  action: signUp,
  success: signUpSuccess,
} = createActions(
  `${domain}`,
  (formData) => ({formData}),
);
