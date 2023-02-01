import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';

export const userState = createFeatureSelector<UserState>('user');

export const selectUserWallet = createSelector(
  userState,
  (state: UserState) => {
    return state?.wallet?.amount;
  }
);
