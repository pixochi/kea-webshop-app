import { Record } from 'immutable';

import { IReduxAction } from '../redux/create-actions';

import * as Actions from './actions';

export class SessionState extends Record<{
  email: string;
  id: string;
  token: string;
  redirectTo: string;
  userType?: number;
}>({
  email: '',
  id: '',
  userType: undefined,
  token: '',
  redirectTo: '',
}) { }

const sessionReducer = (state = new SessionState(), action: IReduxAction) => {
  switch (action.type) {
    case Actions.setUser.type:
      return state.merge({
        ...action.payload.response.user,
        token: action.payload.response.token,
      });
    case Actions.logOut.type:
      return new SessionState();
    case Actions.setRedirectTo.type:
      return state.merge({
        redirectTo: action.payload.redirectTo,
      });
    default:
      return state;
  }
};

export default sessionReducer;
