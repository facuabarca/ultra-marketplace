import { Injectable } from '@angular/core';
import { PlaceOrderResult } from '@app/shared/models/shared.model';
import { delay, Observable, of } from 'rxjs';
import { ApiBridgeService } from '../../../core/services/api-bridge.service';
import { Purchase } from '../store/checkout.state';

@Injectable()
export class CheckoutDataService {
  constructor(private apiBridgeService: ApiBridgeService) {}

  //ToDo: implement apiBridgeService for real connection. This is a fake call.
  public placeOrder(input: Purchase): Observable<PlaceOrderResult> {
    return of({
      purchase: input,
      status: true,
    }).pipe(delay(2000));
  }
}
