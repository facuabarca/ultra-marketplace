import { PlaceOrderResult } from '@app/shared/models/shared.model';
import { createAction, props } from '@ngrx/store';
import { Purchase } from './checkout.state';

export const ActionTypes = {
  PURCHASE_PRODUCTS: '[CHECKOUT] PURCHASE_PRODUCTS',
  PURCHASE_SUCCESS: '[CHECKOUT] PURCHASE_SUCCESS',
  PURCHASE_END: '[CHECKOUT] PURCHASE_END',
};

export const purchaseProducts = createAction(
  ActionTypes.PURCHASE_PRODUCTS,
  props<{ purchase: Purchase }>()
);

export const purchaseSuccess = createAction(
  ActionTypes.PURCHASE_SUCCESS,
  props<{ result: PlaceOrderResult }>()
);

export const purchaseEnd = createAction(ActionTypes.PURCHASE_END);
