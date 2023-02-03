import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { purchaseProducts } from '../store/checkout.actions';
import { Purchase } from '../store/checkout.state';

@Injectable()
export class CheckoutFacadeService {
  constructor(private store: Store) {}

  purchase(purchase: Purchase): void {
    this.store.dispatch(purchaseProducts({ purchase: purchase }));
  }
}
