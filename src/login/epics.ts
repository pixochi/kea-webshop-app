import { combineEpics, ofType, Epic } from 'redux-observable';
import { tap, ignoreElements, map } from 'rxjs/operators';

import { ReduxAction } from '../redux/create-actions';

import {loginSuccess, logOut, logOutSuccess} from './actions';
import { saveUserToLocalStorage, removeUserFromLocalStorage } from './helpers';

const storeUserIdInLocalStorage: Epic<ReduxAction<any>, any> = (action$) => action$.pipe(
  ofType(loginSuccess.type),
  tap((loginSuccessAction) => {
    saveUserToLocalStorage(loginSuccessAction.payload.user);
  }),
  ignoreElements(),
);

const logOutUser: Epic<ReduxAction<any>, any> = (action$) => action$.pipe(
  ofType(logOut.type),
  map(() => {
    removeUserFromLocalStorage();
    return logOutSuccess.action();
  }),
);

export default combineEpics(
  storeUserIdInLocalStorage,
  logOutUser,
);
