import { Injectable } from '@angular/core';
import { IProduct, IUserData } from '@app/shared/models/shared.model';
import { map, Observable, tap } from 'rxjs';
import { ApiBridgeService } from '../../../core/services/api-bridge.service';

@Injectable()
export class ProductDataService {
  constructor(private apiBridgeService: ApiBridgeService) {}

  public getProducts(): Observable<IProduct[]> {
    return this.apiBridgeService.get(`products`);
    //   .pipe(map((users) => this.helperResult(users as IUserData[])));
  }

  private helperResult(users: IUserData[]): IUserData {
    return users[0];
  }
}
