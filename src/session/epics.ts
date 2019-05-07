import { combineEpics, ofType, Epic } from 'redux-observable';
import { map, ignoreElements, tap, filter } from 'rxjs/operators';
import { push } from 'connected-react-router';

import { IReduxAction } from '../redux/create-actions';
import { saveToLocalStorage, removeFromLocalStorage } from '../services/local-storage';

import * as Actions from './actions';
import * as Selectors from './selectors';

const createUserSession: Epic<IReduxAction, any> = (action$) => action$.pipe(
  ofType(Actions.setUser.type),
  tap(({payload}) => {
      saveToLocalStorage('token', payload.response.token);
  }),
  ignoreElements(),
);

const redirectOnLogin: Epic<IReduxAction, any> = (action$, state$) => action$.pipe(
  ofType(Actions.setUser.type),
  map(() => {
    const redirectTo = Selectors.getRedirectTo(state$.value);
    return redirectTo;
  }),
  filter((redirectTo) => {
    return Boolean(redirectTo);
  }),
  map((redirectTo) => {
    return push(redirectTo);
  }),
);

const removeUserSession: Epic<IReduxAction, any> = (action$) => action$.pipe(
  ofType(Actions.logOut.type),
  map(() => {
    removeFromLocalStorage('token');
  }),
  ignoreElements(),
);

export default combineEpics(
  createUserSession,
  removeUserSession,
  redirectOnLogin,
);
