import { Injectable } from '@angular/core';
import { IProduct } from '@app/shared/models/shared.model';
import { Observable } from 'rxjs';
import { ApiBridgeService } from '../../../core/services/api-bridge.service';

@Injectable()
export class ProductDataService {
  constructor(private apiBridgeService: ApiBridgeService) {}

  public getProducts(): Observable<IProduct[]> {
    return this.apiBridgeService.get(`products`);
  }
}
