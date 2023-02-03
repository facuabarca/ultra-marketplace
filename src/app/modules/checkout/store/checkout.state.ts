import { IUser } from '../../../shared/models/shared.model';

export interface CheckoutState {
  purchases: Purchase[];
}

export interface Purchase {
  purchasedProducts: number[];
  user: IUser;
  totalPrice: number;
}

export const checkoutState: CheckoutState = {
  purchases: [],
};
