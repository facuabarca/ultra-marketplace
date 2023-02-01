import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from '@app/modules/user/store/user.actions';
import { getProducts } from '../modules/listing/store/listing.actions';
import { addItemCart } from '../modules/cart/store/cart.actions';
import { IProduct } from './models/shared.model';
import { Observable, map, filter } from 'rxjs';
import { selectUserWallet } from '../modules/user/store/user.selector';
import { selectCartItems } from '@app/modules/cart/store/cart.selector';

@Injectable({
  providedIn: 'root',
})
export class AppFacadeService {
  walletAmount$: Observable<number | undefined>;
  cartCounter$: Observable<number>;

  constructor(private store: Store) {
    this.walletAmount$ = this.store.select(selectUserWallet);
    this.cartCounter$ = this.store
      .select(selectCartItems)
      .pipe(map((cartItems: IProduct[]) => cartItems.length));
  }

  loadUser(): void {
    this.store.dispatch(getUser());
  }

  addItemCart(product: IProduct): void {
    this.store.dispatch(addItemCart({ product }));
  }
}
