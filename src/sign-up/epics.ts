import { combineEpics, ofType, Epic } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

import RestClient from '../rest-api/rest-client';

import * as Actions from './actions';

const fetchProducts = (action$: any) => action$.pipe(
  ofType(Actions.signUp.type),
  mergeMap(({payload}) =>
    from(RestClient.post('signup', {email: payload.formData.email, password: payload.formData.password})).pipe(
      map(({data}) => {
        return Actions.signUpSuccess.action(data);
      }),
      catchError(() => of(Actions.signUpSuccess.action())),
  )),
);

export default combineEpics(
  fetchProducts,
);
