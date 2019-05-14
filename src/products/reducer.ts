import {Record} from 'immutable';

import { ReduxAction } from '../redux/create-actions';

import * as Actions from './actions';

export class ProductsState extends Record<{
  isFetching: boolean;
  products: any[];
}>({
  isFetching: false,
  products: [],
}) {}

export const productsReducer = (state = new ProductsState(), action: ReduxAction) => {
  switch (action.type) {
    case Actions.fetchProducts.type:
      return state.merge({
        isFetching: true,
      });
    case Actions.fetchProductsSuccess.type:
      return state.merge({
        isFetching: false,
        products: action.payload.products,
      });
    case Actions.fetchProductsFailed.type:
      return state.merge({
        isFetching: false,
      });
    default:
      return state;
  }
};

export default productsReducer;
