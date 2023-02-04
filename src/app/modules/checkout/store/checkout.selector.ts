import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CheckoutState } from './checkout.state';

export const checkoutState = createFeatureSelector<CheckoutState>('checkout');

export const selectLastPurchase = createSelector(
  checkoutState,
  (state: CheckoutState) => {
    return state?.purchases[state?.purchases?.length - 1];
  }
);
