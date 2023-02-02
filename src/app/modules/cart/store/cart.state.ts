import { IProductUI } from '../../../shared/models/shared.model';

export interface CartState {
  cartItems: IProductUI[];
}

export const cartState: CartState = {
  cartItems: [],
};
