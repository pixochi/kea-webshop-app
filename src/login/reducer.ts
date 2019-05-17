import {Record} from 'immutable';

import { ReduxAction } from '../redux/create-actions';

import * as Actions from './actions';
import * as SignUpActions from '../sign-up/actions';

export class LoginState extends Record<{
  user: any,
  isLoggingIn: boolean;
}>({
  user: null,
  isLoggingIn: false,
}) {}

export const loginReducer = (state = new LoginState(), action: ReduxAction) => {
  switch (action.type) {
    case Actions.login.type:
      return state.merge({
        isLoggingIn: true,
      });
    case Actions.loginSuccess.type:
      return state.merge({
        user: action.payload.user,
        isLoggingIn: false,
      });
    case SignUpActions.signUpSuccess.type:
      return state.merge({
        user: action.payload,
      });
    case Actions.loginFailed.type:
      return state.merge({
        isLoggingIn: false,
      });
    case Actions.logOutSuccess.type:
      return new LoginState();
    default:
      return state;
  }
};

export default loginReducer;
