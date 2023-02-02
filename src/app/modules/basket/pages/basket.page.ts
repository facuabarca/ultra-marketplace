import { Component } from '@angular/core';
import { AppFacadeService } from '@app/shared/app-facade.service';
import { Observable, map, tap } from 'rxjs';
import { IProductUI } from '../../../shared/models/shared.model';
import { Alert } from '../../../core/store/app.state';

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

  constructor(private readonly appFacadeService: AppFacadeService) {
    this.cartItems$ = this.appFacadeService.cartItems$;
    this.cartTotalPrice$ = this.appFacadeService.cartTotalPrice$;
    this.userCanPurchase$ = this.appFacadeService.canUserPurchase$.pipe(
      tap((status: boolean) => {
        if (!status) this.showError();
      })
    );

    this.statusButtonCheckout$ = this.userCanPurchase$.pipe(
      map((data: boolean) => !data)
    );
  }

  removeCartItem(id: number): void {
    this.appFacadeService.removeItemCart(id);
  }

  private showError(): void {
    this.appFacadeService.addAlert({
      key: 'alert alert-danger',
      value:
        'Oops, you do not have enough credit. Remove products from your cart to checkout.',
    });
  }
}
