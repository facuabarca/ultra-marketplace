import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addItemCart,
  cleanCart,
  removeItemCart,
} from '@app/modules/cart/store/cart.actions';
import { Observable } from 'rxjs';
import {
  selectCartItems,
  selectQuantity,
} from '@app/modules/cart/store/cart.selector';

@Injectable()
export class CartFacadeService {
  cartItems$: Observable<number[]>;
  cartQuantity$: Observable<number>;
  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartQuantity$ = this.store.select(selectQuantity);
  }

  addItemCart(product: number): void {
    this.store.dispatch(addItemCart({ product }));
  }

  cleanCart(): void {
    this.store.dispatch(cleanCart());
  }

  removeItemCart(id: number): void {
    this.store.dispatch(removeItemCart({ id }));
  }
}
