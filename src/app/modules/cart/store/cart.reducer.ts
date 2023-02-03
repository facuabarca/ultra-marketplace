import { createReducer, on } from '@ngrx/store';
import { addItemCart, removeItemCart, cleanCart } from './cart.actions';
import { CartState, cartState } from './cart.state';
export const cartReducers = createReducer(
  cartState,
  on(addItemCart, (state: CartState, { product }) => {
    return { ...state, cartItems: [...state.cartItems, product] };
  }),

  on(removeItemCart, (state: CartState, { id }) => {
    return {
      ...state,
      cartItems: state.cartItems.filter((cartItem: number) => cartItem !== id),
    };
  }),

  on(cleanCart, (state: CartState) => {
    return { ...state, cartItems: [] };
  })
);
