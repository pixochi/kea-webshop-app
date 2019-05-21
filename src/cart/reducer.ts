import {Record, Map} from 'immutable';

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

export interface CartItem {
  product: Product;
  amount: number;
}

export class CartState extends Record<{
  items: Map<string, CartItem>;
}>({
  items: Map(),
}) {}

export const cartReducer = (state = new CartState(), action: ReduxAction) => {
  switch (action.type) {
    case Actions.addToCart.type:
      let itemIsInCart = state.items.has(action.payload.product.id);

      if (itemIsInCart) {
        return state.updateIn(['items', action.payload.product.id], item => ({
          ...item,
          amount: item.amount + 1,
        }))
      }
      else {
        return state.update('items', items => items.set(action.payload.product.id, {
          product: action.payload.product,
          amount: 1,
        }));
      }
    case Actions.removeFromCart.type:
      itemIsInCart = state.items.has(action.payload.productId);

      if (itemIsInCart) {
        return state.updateIn(['items', action.payload.productId], item => ({
          ...item,
          amount: item.amount - 1,
        }))
      }
      else {
        return state.update('items', items => items.remove(action.payload.product.id));
      }
    default:
      return state;
  }
};

export default cartReducer;
