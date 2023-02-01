import { IProduct } from '../../../shared/models/shared.model';

export interface ListingState {
  products: IProduct[];
}

export const listingState: ListingState = { products: [] };
