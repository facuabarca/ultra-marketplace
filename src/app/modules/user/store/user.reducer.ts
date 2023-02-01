import { createReducer, on } from '@ngrx/store';
import { userState, UserState } from './user.state';
import { getUserSuccess } from './user.actions';

export const userReducers = createReducer(
  userState,
  on(getUserSuccess, (state: UserState, { user }) => {
    return { ...state, ...user };
  })
);
