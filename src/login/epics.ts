import { combineEpics, ofType, Epic } from 'redux-observable';
import { tap, ignoreElements, map, mergeMap, catchError, flatMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { push } from 'connected-react-router';

import { ReduxAction } from '../redux/create-actions';
import RestClient from '../rest-api/rest-client';
import * as GlobalEventActions from '../components/global-event/actions';

import * as Actions from './actions';
import { saveUserToLocalStorage, removeUserFromLocalStorage } from './helpers';

const storeUserIdInLocalStorage: Epic<ReduxAction<any>, any> = (action$) => action$.pipe(
  ofType(Actions.loginSuccess.type),
  tap((loginSuccessAction) => {
    saveUserToLocalStorage(loginSuccessAction.payload.user);
  }),
  ignoreElements(),
);

const logOutUser: Epic<ReduxAction<any>, any> = (action$) => action$.pipe(
  ofType(Actions.logOut.type),
  tap(() => removeUserFromLocalStorage()),
  flatMap(() => {
    return [
      Actions.logOutSuccess.action(),
      push('/'),
    ];
  }),
);

const loginUser = (action$: any) => action$.pipe(
  ofType(Actions.login.type),
  mergeMap(({payload}) =>
    from(RestClient.post('login', {email: payload.formData.email, password: payload.formData.password})).pipe(
      flatMap(({data}) => {
        if (typeof data === 'string') {
          return [
            Actions.loginFailed.action(),
            GlobalEventActions.updateError.action(data),
          ];
        }
        return [Actions.loginSuccess.action(data, true), push('/'),];
      }),
      catchError(() => of(Actions.loginFailed.action())),
  )),
);


export default combineEpics(
  storeUserIdInLocalStorage,
  logOutUser,
  loginUser,
);
