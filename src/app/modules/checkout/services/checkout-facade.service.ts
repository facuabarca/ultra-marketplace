import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { purchaseProducts } from '../store/checkout.actions';
import { Purchase } from '../store/checkout.state';
import { CartFacadeService } from '../../cart/services/cart-facade.service';
import { Observable } from 'rxjs';
import { UserFacadeService } from '../../user/services/user-facade.service';
import { SharedFacadeService } from '@app/shared/shared-facade.service';
import { selectLastPurchase } from '../store/checkout.selector';

@Injectable()
export class CheckoutFacadeService {
  cartItems$: Observable<number[]>;
  totalPrice$: Observable<number>;
  lastPurchase$: Observable<Purchase>;

  constructor(
    private readonly store: Store,
    private readonly cartFacadeService: CartFacadeService,
    private readonly userFacadeService: UserFacadeService,
    private readonly sharedFacadeService: SharedFacadeService
  ) {
    this.cartItems$ = this.cartFacadeService.cartItems$;
    this.totalPrice$ = this.sharedFacadeService.cartTotalPrice$;
    this.lastPurchase$ = this.store.select(selectLastPurchase);
  }

  purchase(purchase: Purchase): void {
    this.store.dispatch(purchaseProducts({ purchase }));
  }

  updateWallet(amount: number): void {
    this.userFacadeService.updateWallet(amount);
  }

  cleanCart(): void {
    this.cartFacadeService.cleanCart();
  }

  updateProductsPurchased(productsPurchased: number[]): void {
    this.userFacadeService.updateProductsPurchased(productsPurchased);
  }
}
