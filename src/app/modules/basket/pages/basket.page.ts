import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProductUI } from '../../../shared/models/shared.model';
import { BasketFacadeService } from '../services/basket-facade.service';

@Component({
  selector: 'app-basket',
  templateUrl: 'basket.page.html',
  styleUrls: ['basket.page.scss'],
})
export class BasketPage {
  cartItems$: Observable<IProductUI[]>;
  cartTotalPrice$: Observable<number>;
  statusButtonCheckout$: Observable<boolean>;
  userCanPurchase$: Observable<boolean>;

  constructor(private readonly basketFacadeService: BasketFacadeService) {
    this.cartItems$ = this.basketFacadeService.cartItems$;
    this.cartTotalPrice$ = this.basketFacadeService.cartTotalPrice$;
    this.userCanPurchase$ = this.basketFacadeService.userCanPurchase$;
    this.statusButtonCheckout$ = this.userCanPurchase$.pipe(
      map((data: boolean) => !data)
    );
  }

  removeCartItem(id: number): void {
    this.basketFacadeService.removeCartItem(id);
  }
}
