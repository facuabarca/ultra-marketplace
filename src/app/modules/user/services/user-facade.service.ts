import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectUserProductsPurchased,
  selectUserWallet,
} from '../store/user.selector';
import {
  getUser,
  updateUserProductsPurchased,
  updateUserWallet,
} from '../store/user.actions';

@Injectable()
export class UserFacadeService {
  walletAmount$: Observable<number>;
  userProductsPurchased$: Observable<number[]>;

  constructor(private store: Store) {
    this.walletAmount$ = this.store.select(selectUserWallet);
    this.userProductsPurchased$ = this.store.select(
      selectUserProductsPurchased
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
