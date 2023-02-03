import { Injectable } from '@angular/core';
import { IProductUI } from '@app/shared/models/shared.model';
import { Observable, tap } from 'rxjs';
import { CartFacadeService } from '../../cart/services/cart-facade.service';
import { UserFacadeService } from '../../user/services/user-facade.service';
import { AppFacadeService } from '../../../shared/app-facade.service';

@Injectable()
export class BasketFacadeService {
  cartItems$: Observable<IProductUI[]>;
  cartTotalPrice$: Observable<number>;
  userCanPurchase$: Observable<boolean>;
  cartQuantity$: Observable<number>;
  constructor(
    private readonly cartFacadeService: CartFacadeService,
    private readonly userFacadeService: UserFacadeService,
    private readonly appFacadeService: AppFacadeService
  ) {
    this.cartItems$ = this.cartFacadeService.cartItems$;
    this.cartQuantity$ = this.cartFacadeService.cartQuantity$;
    this.cartTotalPrice$ = this.cartFacadeService.cartTotalPrice$;
    this.userCanPurchase$ = this.userFacadeService.canPurchase$.pipe(
      tap((status: boolean) => {
        if (!status) this.showAlert();
      })
    );
  }

  removeCartItem(id: number): void {
    this.cartFacadeService.removeItemCart(id);
  }

  private showAlert(): void {
    this.appFacadeService.addAlert({
      key: 'alert alert-danger',
      value:
        'Oops, you do not have enough credit. Remove products from your cart to checkout.',
    });
  }
}
