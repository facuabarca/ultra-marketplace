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
import { Router } from '@angular/router';
import { CheckoutFacadeService } from '../services/checkout-facade.service';

@Injectable()
export class CheckoutEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly checkoutDataService: CheckoutDataService,
    private readonly checkoutFacadeService: CheckoutFacadeService,
    private router: Router
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
      map(() => purchaseEnd()),
      tap(() => this.router.navigate(['/checkout/success']))
    );
  });

  private updateData(result: PlaceOrderResult): void {
    this.checkoutFacadeService.updateWallet(result.purchase.totalPrice);
    this.checkoutFacadeService.cleanCart();
    this.checkoutFacadeService.updateProductsPurchased(
      result.purchase.purchasedProducts
    );
  }
}
