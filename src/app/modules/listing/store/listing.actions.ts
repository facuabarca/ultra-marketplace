import { createAction, props } from '@ngrx/store';
import { IProductUI } from '@app/shared/models/shared.model';

export const ActionTypes = {
  GET_PRODUCTS: '[LISTING] GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: '[LISTING] GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: '[LISTING] GET_PRODUCTS_ERROR',
};

export const getProducts = createAction(ActionTypes.GET_PRODUCTS);

export const getProductsSuccess = createAction(
  ActionTypes.GET_PRODUCTS_SUCCESS,
  props<{ products: IProductUI[] }>()
);
