import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getUser,
  updateUserWallet,
} from '@app/modules/user/store/user.actions';
import {
  addItemCart,
  cleanCart,
  removeItemCart,
} from '../modules/cart/store/cart.actions';
import { IProductUI } from './models/shared.model';
import { Observable, map, combineLatest } from 'rxjs';
import { selectUserWallet } from '../modules/user/store/user.selector';
import {
  getTotalPrice,
  selectCartItems,
} from '@app/modules/cart/store/cart.selector';
import { addAlert, removeAlert } from '@core/store/app.actions';
import { Alert } from '../core/store/app.state';
import { selectAlerts } from '@core/store/app.selector';
import { updateUserProductsPurchased } from '../modules/user/store/user.actions';

@Injectable({
  providedIn: 'root',
})
export class AppFacadeService {
  walletAmount$: Observable<number>;
  cartItems$: Observable<IProductUI[]>;
  cartCounter$: Observable<number>;
  cartTotalPrice$: Observable<number>;
  canUserPurchase$: Observable<boolean>;
  alert$: Observable<Alert>;
  showAlert$: Observable<boolean>;

  constructor(private store: Store) {
    this.walletAmount$ = this.store.select(selectUserWallet);
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartCounter$ = this.cartItems$.pipe(
      map((cartItems: IProductUI[]) => cartItems.length)
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
    this.alert$ = this.store.select(selectAlerts);
    this.showAlert$ = this.alert$.pipe(
      map((alert: Alert) => {
        console.log(alert);
        console.log(Boolean(alert?.key));
        return Boolean(alert?.key);
      })
    );
  }

  loadUser(): void {
    this.store.dispatch(getUser());
  }

  updateWallet(amountSpended: number): void {
    this.store.dispatch(updateUserWallet({ amount: amountSpended }));
  }

  updateProductsPurchased(productsPurchased: number[]): void {
    this.store.dispatch(updateUserProductsPurchased({ productsPurchased }));
  }

  addItemCart(product: IProductUI): void {
    this.store.dispatch(addItemCart({ product }));
  }

  removeItemCart(id: number): void {
    this.store.dispatch(removeItemCart({ id }));
  }

  cleanCart(): void {
    this.store.dispatch(cleanCart());
  }

  addAlert(alert: Alert): void {
    console.log(alert);
    this.store.dispatch(addAlert({ alert }));
  }

  removeAlert(): void {
    this.store.dispatch(removeAlert({ alert: {} }));
  }
}
