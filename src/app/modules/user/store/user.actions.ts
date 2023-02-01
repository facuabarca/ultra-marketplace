import { UserState } from '@app/modules/user/store/user.state';
import { createAction, props } from '@ngrx/store';

export const ActionTypes = {
  GET_USER: '[APP] GET_USER',
  GET_USER_SUCCESS: '[APP] GET_USER_SUCCESS',
  GET_USER_ERROR: '[APP] GET_USER_ERROR',
};

export const getUser = createAction(ActionTypes.GET_USER);

export const getUserSuccess = createAction(
  ActionTypes.GET_USER_SUCCESS,
  props<{ user: UserState }>()
);
