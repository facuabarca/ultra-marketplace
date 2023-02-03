import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketFacadeService } from '../services/basket-facade.service';

@Component({
  selector: 'app-basket',
  templateUrl: 'basket.page.html',
  styleUrls: ['basket.page.scss'],
})
export class BasketPage {
  cartItems$: Observable<number[]>;
  cartTotalPrice$: Observable<number>;
  userCanPurchase$: Observable<boolean>;

  constructor(private readonly basketFacadeService: BasketFacadeService) {
    this.cartItems$ = this.basketFacadeService.cartItems$;
    this.cartTotalPrice$ = this.basketFacadeService.cartTotalPrice$;
    this.userCanPurchase$ = this.basketFacadeService.userCanPurchase$;
  }

  removeCartItem(id: number): void {
    this.basketFacadeService.removeCartItem(id);
  }
}
