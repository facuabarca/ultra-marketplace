import { createReducer, on } from '@ngrx/store';
import { addItemCart, removeItemCart } from './cart.actions';
import { CartState, cartState } from './cart.state';
import { IProductUI } from '../../../shared/models/shared.model';
export const cartReducers = createReducer(
  cartState,
  on(addItemCart, (state: CartState, { product }) => {
    return { ...state, cartItems: [...state.cartItems, product] };
  }),

  on(removeItemCart, (state: CartState, { id }) => {
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (cartItem: IProductUI) => cartItem.id !== id
      ),
    };
  })
);
