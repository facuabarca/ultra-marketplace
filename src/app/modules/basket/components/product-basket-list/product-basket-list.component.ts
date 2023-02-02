import { Component } from '@angular/core';
import { AppFacadeService } from '@app/shared/app-facade.service';
import { IProductUI } from '@app/shared/models/shared.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-basket-list',
  templateUrl: 'product-basket-list.component.html',
  styleUrls: ['product-basket-list.component.scss'],
})
export class ProductBasketListComponent {
  cartItems$: Observable<IProductUI[]>;
  constructor(private readonly appFacadeService: AppFacadeService) {
    this.cartItems$ = this.appFacadeService.cartItems$;
  }
}
