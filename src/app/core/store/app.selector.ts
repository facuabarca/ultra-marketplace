import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './app.state';

export const appState = createFeatureSelector<AppState>('app');

export const selectAlerts = createSelector(appState, (state: AppState) => {
  return state?.alert;
});
