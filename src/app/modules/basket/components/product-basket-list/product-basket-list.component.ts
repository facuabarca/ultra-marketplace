import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketFacadeService } from '../../services/basket-facade.service';
import { IProductUI } from '../../../../shared/models/shared.model';

@Component({
  selector: 'app-product-basket-list',
  templateUrl: 'product-basket-list.component.html',
  styleUrls: ['product-basket-list.component.scss'],
})
export class ProductBasketListComponent {
  basketList$: Observable<IProductUI[]>;
  constructor(private readonly basketFacadeService: BasketFacadeService) {
    this.basketList$ = this.basketFacadeService.basketList$;
  }
}
