import { Injectable } from '@angular/core';
import { map, Observable, combineLatest, tap } from 'rxjs';
import { CartFacadeService } from '../../cart/services/cart-facade.service';
import { SharedFacadeService } from '../../../shared/shared-facade.service';
import { IProductUI } from '../../../shared/models/shared.model';
import { ListingFacadeService } from '../../listing/services/listing-facade.service';

@Injectable()
export class BasketFacadeService {
  cartItems$: Observable<number[]>;
  cartTotalPrice$: Observable<number>;
  cartQuantity$: Observable<number>;
  userCanPurchase$: Observable<boolean>;
  basketList$: Observable<IProductUI[]>;
  constructor(
    private readonly cartFacadeService: CartFacadeService,
    private readonly sharedFacadeService: SharedFacadeService,
    private readonly listingFacadeService: ListingFacadeService
  ) {
    this.cartItems$ = this.cartFacadeService.cartItems$;
    this.cartQuantity$ = this.cartFacadeService.cartQuantity$;
    this.cartTotalPrice$ = this.sharedFacadeService.cartTotalPrice$;
    this.userCanPurchase$ = this.checkIfUserCanPurchase();
    this.basketList$ = this.getBasketList();
  }

  removeCartItem(id: number): void {
    this.cartFacadeService.removeItemCart(id);
  }

  private showAlert(): void {
    this.sharedFacadeService.addAlert({
      key: 'alert alert-danger',
      value:
        'Oops, you do not have enough credit. Remove products from your cart to checkout.',
    });
  }

  private getBasketList(): Observable<IProductUI[]> {
    return combineLatest([
      this.listingFacadeService.productsList$,
      this.cartItems$,
    ]).pipe(
      map(([productsList, cartItems]) => {
        return (productsList = productsList.filter((product: IProductUI) =>
          cartItems.includes(product.id)
        ));
      })
    );
  }

  private checkIfUserCanPurchase(): Observable<boolean> {
    return combineLatest([
      this.sharedFacadeService.walletAmount$,
      this.sharedFacadeService.cartTotalPrice$,
    ]).pipe(
      map(([walletAmount, cartTotalPrice]) => {
        return Boolean(walletAmount >= cartTotalPrice);
      }),
      tap((data) => (!data ? this.showAlert() : data))
    );
  }
}
