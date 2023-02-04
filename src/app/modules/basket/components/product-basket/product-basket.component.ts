import { Component, Input } from '@angular/core';
import { IProductUI } from '../../../../shared/models/shared.model';
import { BasketFacadeService } from '../../services/basket-facade.service';

@Component({
  selector: '[app-product-basket]',
  templateUrl: 'product-basket.component.html',
  styleUrls: ['product-basket.component.scss'],
})
export class ProductBasketComponent {
  @Input() product!: IProductUI;

  constructor(private readonly basketFacadeService: BasketFacadeService) {}

  remove(): void {
    this.basketFacadeService.removeCartItem(this.product.id);
  }
}
