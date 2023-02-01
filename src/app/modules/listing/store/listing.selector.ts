import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ListingState } from './listing.state';

export const listingState = createFeatureSelector<ListingState>('listing');

export const selectUser = createSelector(
  listingState,
  (state: ListingState) => {
    return state;
  }
);

export const selectProducts = createSelector(
  listingState,
  (state: ListingState) => state?.products
);
