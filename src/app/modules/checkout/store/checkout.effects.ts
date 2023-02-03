import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs';
import { PlaceOrderResult } from '@app/shared/models/shared.model';
import {
  purchaseEnd,
  purchaseProducts,
  purchaseSuccess,
} from './checkout.actions';
import { CheckoutDataService } from '../services/checkout-data.service';
import { AppFacadeService } from '../../../shared/app-facade.service';

@Injectable()
export class CheckoutEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly checkoutDataService: CheckoutDataService,
    private readonly appFacadeService: AppFacadeService
  ) {}

  public purchaseProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(purchaseProducts),
      mergeMap((data) => this.checkoutDataService.placeOrder(data.purchase)),
      map((result: PlaceOrderResult) => purchaseSuccess({ result }))
    );
  });

  public purchaseSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(purchaseSuccess),
      tap(({ result }) => this.updateData(result)),
      map(() => purchaseEnd())
    );
  });

  private updateData(result: PlaceOrderResult): void {
    this.appFacadeService.updateWallet(result.purchase.totalPrice),
      this.appFacadeService.cleanCart();
    this.appFacadeService.updateProductsPurchased(
      result.purchase.purchasedProducts
    );
  }
}
