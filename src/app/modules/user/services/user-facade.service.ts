import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import {
  selectUserProductsPurchased,
  selectUserWallet,
} from '../store/user.selector';
import { CartFacadeService } from '../../cart/services/cart-facade.service';
import {
  getUser,
  updateUserProductsPurchased,
  updateUserWallet,
} from '../store/user.actions';

@Injectable()
export class UserFacadeService {
  walletAmount$: Observable<number>;
  canPurchase$: Observable<boolean>;
  userProductsPurchased$: Observable<number[]>;

  constructor(
    private store: Store,
    private readonly cartFacadeService: CartFacadeService
  ) {
    this.walletAmount$ = this.store.select(selectUserWallet);
    this.userProductsPurchased$ = this.store.select(
      selectUserProductsPurchased
    );
    this.canPurchase$ = combineLatest([
      this.walletAmount$,
      this.cartFacadeService.cartTotalPrice$,
    ]).pipe(
      map(([walletAmount, cartTotalPrice]) => {
        return Boolean(walletAmount >= cartTotalPrice);
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
}
