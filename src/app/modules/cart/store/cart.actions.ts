import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../../shared/models/shared.model';

export const ActionTypes = {
  ADD_ITEM_CART: '[CART] ADD_ITEM_CART',
  REMOVE_ITEM_CART: '[CART] REMOVE_ITEM_CART',
};

export const addItemCart = createAction(
  ActionTypes.ADD_ITEM_CART,
  props<{ product: IProduct }>()
);

export const removeItemCart = createAction(
  ActionTypes.REMOVE_ITEM_CART,
  props<{ id: number }>()
);
