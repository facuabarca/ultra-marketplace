import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartState } from './cart.state';
import { IProductUI } from '../../../shared/models/shared.model';

export const cartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(cartState, (state: CartState) => {
  return state?.cartItems;
});

export const getTotalPrice = createSelector(cartState, (state: CartState) => {
  return state?.cartItems.reduce(
    (total: number, product: IProductUI) => (total += product.price),
    0
  );
});
