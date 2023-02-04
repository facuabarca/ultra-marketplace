import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartState } from './cart.state';

export const cartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(cartState, (state: CartState) => {
  return state?.cartItems;
});

export const selectQuantity = createSelector(
  cartState,
  (state: CartState) => state.cartItems.length
);
