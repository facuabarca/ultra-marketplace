import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { addAlert, removeAlert } from '@core/store/app.actions';
import { Alert } from '../core/store/app.state';
import { selectAlerts } from '@core/store/app.selector';
import { CartFacadeService } from '../modules/cart/services/cart-facade.service';
import { UserFacadeService } from '../modules/user/services/user-facade.service';

@Injectable()
export class SharedFacadeService {
  walletAmount$: Observable<number>;
  cartCounter$: Observable<number>;
  alert$: Observable<Alert>;
  showAlert$: Observable<boolean>;

  constructor(
    private readonly store: Store,
    private readonly cartFacadeService: CartFacadeService,
    private readonly userFacadeService: UserFacadeService
  ) {
    this.walletAmount$ = this.userFacadeService.walletAmount$;

    this.cartCounter$ = this.cartFacadeService.cartQuantity$;

    this.alert$ = this.store.select(selectAlerts);

    this.showAlert$ = this.alert$.pipe(
      map((alert: Alert) => {
        return Boolean(alert?.key);
      })
    );
  }

  addAlert(alert: Alert): void {
    this.store.dispatch(addAlert({ alert }));
  }

  removeAlert(): void {
    this.store.dispatch(removeAlert({ alert: {} }));
  }
}
