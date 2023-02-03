import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
  ADD_ITEM_CART: '[CART] ADD_ITEM_CART',
  REMOVE_ITEM_CART: '[CART] REMOVE_ITEM_CART',
  CLEAN_CART: '[CART] CLEAN_CART',
};

export const addItemCart = createAction(
  ActionTypes.ADD_ITEM_CART,
  props<{ product: number }>()
);

export const removeItemCart = createAction(
  ActionTypes.REMOVE_ITEM_CART,
  props<{ id: number }>()
);

export const cleanCart = createAction(ActionTypes.CLEAN_CART);
