import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from '@app/modules/user/store/user.actions';
import { getProducts } from '../modules/listing/store/listing.actions';
import { addItemCart } from '../modules/cart/store/cart.actions';
import { IProduct } from './models/shared.model';
import { Observable, map, filter, tap, combineLatest } from 'rxjs';
import { selectUserWallet } from '../modules/user/store/user.selector';
import {
  getTotalPrice,
  selectCartItems,
} from '@app/modules/cart/store/cart.selector';

@Injectable({
  providedIn: 'root',
})
export class AppFacadeService {
  walletAmount$: Observable<number>;
  cartItems$: Observable<IProduct[]>;
  cartCounter$: Observable<number>;
  cartTotalPrice$: Observable<number>;
  canUserPurchase$: Observable<boolean>;

  constructor(private store: Store) {
    this.walletAmount$ = this.store.select(selectUserWallet);
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartCounter$ = this.cartItems$.pipe(
      map((cartItems: IProduct[]) => cartItems.length)
    );
    this.cartTotalPrice$ = this.store.select(getTotalPrice);
    this.canUserPurchase$ = combineLatest([
      this.walletAmount$,
      this.cartTotalPrice$,
    ]).pipe(
      map(([walletAmount, cartTotalPrice]) => {
        return Boolean(walletAmount >= cartTotalPrice);
      })
    );
  }

  loadUser(): void {
    this.store.dispatch(getUser());
  }

  addItemCart(product: IProduct): void {
    this.store.dispatch(addItemCart({ product }));
  }
}
