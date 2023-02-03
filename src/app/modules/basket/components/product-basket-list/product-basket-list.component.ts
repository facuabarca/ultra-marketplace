import { Component } from '@angular/core';
import { IProductUI } from '@app/shared/models/shared.model';
import { Observable } from 'rxjs';
import { BasketFacadeService } from '../../services/basket-facade.service';

@Component({
  selector: 'app-product-basket-list',
  templateUrl: 'product-basket-list.component.html',
  styleUrls: ['product-basket-list.component.scss'],
})
export class ProductBasketListComponent {
  cartItems$: Observable<IProductUI[]>;
  constructor(private readonly basketFacadeService: BasketFacadeService) {
    this.cartItems$ = this.basketFacadeService.cartItems$;
  }
}
