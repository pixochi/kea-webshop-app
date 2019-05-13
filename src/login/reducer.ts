import {Record} from 'immutable';

import { ReduxAction } from '../redux/create-actions';

import {loginSuccess, logOutSuccess} from './actions';

export class LoginState extends Record<{
  user: any,
}>({
  user: null,
}) {}

export const loginReducer = (state = new LoginState(), action: ReduxAction) => {
  switch (action.type) {
    case loginSuccess.type:
      return state.merge({
        user: action.payload.user,
      });
    case logOutSuccess.type:
      return new LoginState();
    default:
      return state;
  }
};

export default loginReducer;
