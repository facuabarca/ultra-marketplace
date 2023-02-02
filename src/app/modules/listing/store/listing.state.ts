import { IProductUI } from '../../../shared/models/shared.model';

export interface ListingState {
  products: IProductUI[];
}

export const listingState: ListingState = { products: [] };
