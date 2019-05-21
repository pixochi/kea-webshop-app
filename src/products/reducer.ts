import {Record} from 'immutable';

import { ReduxAction } from '../redux/create-actions';

import * as Actions from './actions';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  categoryId: number;
}

export class ProductsState extends Record<{
  isFetching: boolean;
  products: Product[];
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
