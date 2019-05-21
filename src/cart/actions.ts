import { createActions } from '../redux/create-actions';

const domain = 'CART';

export const {
  action: addToCart,
} = createActions(
  `${domain}/ADD_TO_CART`,
  (product) => ({product}),
);

export const {
  action: removeFromCart,
} = createActions(
  `${domain}/REMOVE_FROM_CART`,
  (productId) => ({productId}),
);
