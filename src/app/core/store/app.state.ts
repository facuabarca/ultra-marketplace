export interface Alert {
  key?: string;
  value?: string;
}

export interface AppState {
  alert: Alert;
}

export const appState: AppState = {
  alert: {},
};
