import { createReducer, on } from '@ngrx/store';
import { purchaseSuccess } from './checkout.actions';
import { CheckoutState, checkoutState } from './checkout.state';
export const checkoutReducers = createReducer(
  checkoutState,

  on(purchaseSuccess, (state: CheckoutState, { result }) => {
    return {
      ...state,
      purchases: [...state.purchases, result.purchase],
    };
  })
);
