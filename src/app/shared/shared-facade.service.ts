import { Store } from '@ngrx/store';
import { Observable, map, combineLatest } from 'rxjs';
import { addAlert, removeAlert } from '../core/store/app.actions';
import { Alert } from '../core/store/app.state';
import { selectAlerts } from '../core/store/app.selector';
import { CartFacadeService } from '../modules/cart/services/cart-facade.service';
import { UserFacadeService } from '../modules/user/services/user-facade.service';
import { ListingFacadeService } from '../modules/listing/services/listing-facade.service';
import { IProductUI } from './models/shared.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedFacadeService {
  walletAmount$: Observable<number>;
  cartTotalPrice$: Observable<number>;
  cartCounter$: Observable<number>;
  alert$: Observable<Alert>;
  showAlert$: Observable<boolean>;

  constructor(
    private readonly store: Store,
    private readonly cartFacadeService: CartFacadeService,
    private readonly userFacadeService: UserFacadeService,
    private readonly listingFacadeService: ListingFacadeService
  ) {
    this.walletAmount$ = this.userFacadeService.walletAmount$;
    this.cartCounter$ = this.cartFacadeService.cartQuantity$;
    this.cartTotalPrice$ = this.getTotalPrice();
    this.alert$ = this.store.select(selectAlerts);
    this.showAlert$ = this.alert$.pipe(
      map((alert: Alert) => Boolean(alert?.key))
    );
  }

  addAlert(alert: Alert): void {
    this.store.dispatch(addAlert({ alert }));
  }

  removeAlert(): void {
    this.store.dispatch(removeAlert({ alert: {} }));
  }

  loadUser(): void {
    this.userFacadeService.loadUser();
  }

  private getTotalPrice(): Observable<number> {
    return combineLatest([
      this.listingFacadeService.productsList$,
      this.cartFacadeService.cartItems$,
    ]).pipe(
      map(([productsList, cartItems]) => {
        return productsList
          .filter((product: IProductUI) => cartItems.includes(product.id))
          .reduce(
            (total: number, product: IProductUI) => (total += product.price),
            0
          );
      })
    );
  }
}
