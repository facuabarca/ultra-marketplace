import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasketFacadeService } from '../services/basket-facade.service';

@Injectable()
export class BasketGuard implements CanActivate {
  constructor(private readonly basketFacadeService: BasketFacadeService) {}

  canActivate(): Observable<boolean> {
    return this.basketFacadeService.cartQuantity$.pipe(
      map((quantity: number) => Boolean(quantity > 0))
    );
  }
}
