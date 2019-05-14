import {createActions} from '../redux/create-actions';

const domain = 'PRODUCTS';

export const {
  action: fetchProducts,
  success: fetchProductsSuccess,
  failed: fetchProductsFailed,
} = createActions(
  `${domain}/FETCH`,
  () => null,
  (products) => ({products}),
);
