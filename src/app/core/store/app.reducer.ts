import { createReducer, on } from '@ngrx/store';
import { addAlert, removeAlert } from './app.actions';
import { appState, AppState, Alert } from './app.state';
export const appReducers = createReducer(
  appState,
  on(addAlert, (state: AppState, { alert }) => {
    return { ...state, alert };
  }),

  on(removeAlert, (state: AppState, { alert }) => {
    return {
      ...state,
      alert: { ...alert },
    };
  })
);
