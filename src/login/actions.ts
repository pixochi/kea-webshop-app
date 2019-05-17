import {createActions} from '../redux/create-actions';

const domain = 'AUTH';

export const {
  action: login,
  success: loginSuccess,
  failed: loginFailed,
} = createActions(
  `${domain}/LOGIN`,
  (formData) => ({formData}),
  (user) => ({user}),
);

export const {
  action: logOut,
  success: logOutSuccess,
} = createActions(
  `${domain}/LOGOUT`,
  () => null,
);
