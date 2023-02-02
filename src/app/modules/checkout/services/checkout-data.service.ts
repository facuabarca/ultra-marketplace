import { Injectable } from '@angular/core';
import {
  IUserData,
  PlaceOrderInput,
  PlaceOrderResult,
} from '@app/shared/models/shared.model';
import { delay, map, Observable, of, tap } from 'rxjs';
import { ApiBridgeService } from '../../../core/services/api-bridge.service';

@Injectable()
export class UserDataService {
  constructor(private apiBridgeService: ApiBridgeService) {}

  //ToDo: implement apiBridgeService for real connection. This is a fake call.
  public placeOrder(input: PlaceOrderInput): Observable<PlaceOrderResult> {
    return of({
      wallet: {
        amount: 0,
      },
      status: true,
    }).pipe(delay(2000));
  }
}
