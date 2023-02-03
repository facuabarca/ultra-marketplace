import { UserState, Wallet } from '@app/modules/user/store/user.state';
import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
  GET_USER: '[USER] GET_USER',
  GET_USER_SUCCESS: '[USER] GET_USER_SUCCESS',
  UPDATE_USER_WALLET: '[USER] UPDATE_USER_WALLET',
  UPDATE_USER_PRODUCTS_PURCHASED: '[USER] UPDATE_USER_PRODUCTS_PURCHASED',
};

export const getUser = createAction(ActionTypes.GET_USER);

export const getUserSuccess = createAction(
  ActionTypes.GET_USER_SUCCESS,
  props<{ user: UserState }>()
);

export const updateUserWallet = createAction(
  ActionTypes.UPDATE_USER_WALLET,
  props<{ amount: number }>()
);

export const updateUserProductsPurchased = createAction(
  ActionTypes.UPDATE_USER_PRODUCTS_PURCHASED,
  props<{ productsPurchased: number[] }>()
);
