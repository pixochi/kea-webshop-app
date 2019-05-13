import {createSelector} from 'reselect';

import { RootState } from '../redux/root-reducer';

export const getUser = (state: RootState) => state.login.user;

export const getUserId = createSelector(
  getUser,
  (user) => user ? user.id : '',
);

export const getUsername = createSelector(
  getUser,
  (user) => user ? user.username : '',
);
