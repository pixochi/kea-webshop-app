import { combineEpics, ofType, Epic } from 'redux-observable';
import { map } from 'rxjs/operators';

import * as GlobalEventActions from '../components/global-event/actions';
import { ReduxAction } from '../redux/create-actions';

import * as Actions from './actions';

const addToCartGlobalMessage = (action$) => action$.pipe(
  ofType(Actions.addToCart.type),
  map(({payload}) =>
    GlobalEventActions.updateSuccess.action(`${payload.product.name}: added to cart`),
  ),
);

export default combineEpics(
  addToCartGlobalMessage,
);
