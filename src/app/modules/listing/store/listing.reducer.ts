import { createReducer, on } from '@ngrx/store';
import { listingState, ListingState } from './listing.state';
import { getProductsSuccess } from './listing.actions';

export const listingReducers = createReducer(
  listingState,
  on(getProductsSuccess, (state: ListingState, { products }) => {
    return { ...state, products: products };
  })
);
