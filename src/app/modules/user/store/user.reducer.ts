import { createReducer, on } from '@ngrx/store';
import { userState, UserState } from './user.state';
import {
  getUserSuccess,
  updateUserWallet,
  updateUserProductsPurchased,
} from './user.actions';

export const userReducers = createReducer(
  userState,
  on(getUserSuccess, (state: UserState, { user }) => {
    return { ...state, ...user };
  }),
  on(updateUserWallet, (state: UserState, { amount }) => {
    return { ...state, wallet: { amount: state.wallet.amount - amount } };
  }),
  on(updateUserProductsPurchased, (state: UserState, { productsPurchased }) => {
    return {
      ...state,
      productsPurchased: [
        ...(state.productsPurchased?.concat(productsPurchased) ?? []),
      ],
    };
  })
);
