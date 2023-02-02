import { createAction, props } from '@ngrx/store';
import { Alert } from './app.state';

export const ActionTypes = {
  ADD_ALERT: '[APP] ADD_ALERT',
  REMOVE_ALERT: '[APP] REMOVE_ALERT',
};

export const addAlert = createAction(
  ActionTypes.ADD_ALERT,
  props<{ alert: Alert }>()
);

export const removeAlert = createAction(
  ActionTypes.REMOVE_ALERT,
  props<{ alert: Alert }>()
);
