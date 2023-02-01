import { Component } from '@angular/core';
import { AppFacadeService } from '@app/shared/app-facade.service';
import { Observable } from 'rxjs';
import { IProduct } from '../../../shared/models/shared.model';

@Component({
  selector: 'app-basket',
  templateUrl: 'basket.page.html',
  styleUrls: ['basket.page.scss'],
})
export class BasketPage {
  cartItems$: Observable<IProduct[]>;
  cartTotalPrice$: Observable<number>;
  canPurchase$: Observable<boolean>;
  constructor(private readonly appFacadeService: AppFacadeService) {
    this.cartItems$ = this.appFacadeService.cartItems$;
    this.cartTotalPrice$ = this.appFacadeService.cartTotalPrice$;
    this.canPurchase$ = this.appFacadeService.canUserPurchase$;
  }
}
