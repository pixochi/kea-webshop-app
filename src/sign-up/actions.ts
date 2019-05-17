import {createActions} from '../redux/create-actions';

const domain = 'SIGN_UP';

export const {
  action: signUp,
  success: signUpSuccess,
  failed: signUpFailed,
} = createActions(
  `${domain}`,
  (formData: {email: string; password: string}) => ({formData}),
);
