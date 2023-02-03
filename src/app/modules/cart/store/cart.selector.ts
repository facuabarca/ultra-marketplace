import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartState } from './cart.state';

export const cartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(cartState, (state: CartState) => {
  return state?.cartItems;
});

// export const getTotalPrice = createSelector(cartState, (state: CartState) => {
//   return state?.cartItems.reduce(
//     (total: number, product: IProductUI) => (total += product.price),
//     0
//   );
// });

export const selectQuantity = createSelector(
  cartState,
  (state: CartState) => state.cartItems.length
);
