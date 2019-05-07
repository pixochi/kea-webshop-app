import {createActions} from '../redux/create-actions';

export const domain = 'SESSION';

export const {
  action: setUser,
} = createActions(
  `${domain}/SET_USER`,
  (response: any) => ({response}),
);

export const {
  action: logOut,
} = createActions(
  `${domain}/LOG_OUT`,
  () => ({}),
);

export const {
  action: setRedirectTo,
} = createActions(
  `${domain}/SET_REDIRECT_TO`,
  (redirectTo: string) => ({redirectTo}),
);
