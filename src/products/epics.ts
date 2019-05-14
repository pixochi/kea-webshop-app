import { combineEpics, ofType, Epic } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

import RestClient from '../rest-api/rest-client';

import * as Actions from './actions';

const fetchProducts = (action$: any) => action$.pipe(
  ofType(Actions.fetchProducts.type),
  mergeMap(action =>
    from(RestClient.get('products')).pipe(
      map(({data}) => {
        return Actions.fetchProductsSuccess.action(data);
      }),
      catchError(() => of(Actions.fetchProductsFailed.action())),
  )),
);

export default combineEpics(
  fetchProducts,
);
