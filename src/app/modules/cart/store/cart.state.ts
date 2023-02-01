import { IProduct } from '../../../shared/models/shared.model';

export interface CartState {
  cartItems: IProduct[];
}

export const cartState: CartState = {
  cartItems: [],
};
