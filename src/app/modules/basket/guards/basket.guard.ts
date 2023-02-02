import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppFacadeService } from '../../../shared/app-facade.service';

@Injectable()
export class BasketGuard implements CanActivate {
  constructor(private readonly appFacadeService: AppFacadeService) {}

  canActivate(): Observable<boolean> {
    return this.appFacadeService.cartCounter$.pipe(
      map((quantity: number) => Boolean(quantity > 0))
    );
  }
}
