import { Component, Input } from '@angular/core';
import { AppFacadeService } from '@app/shared/app-facade.service';
import { IProductUI } from '../../../../shared/models/shared.model';

@Component({
  selector: 'app-product-basket',
  templateUrl: 'product-basket.component.html',
  styleUrls: ['product-basket.component.scss'],
})
export class ProductBasketComponent {
  @Input() product!: IProductUI;

  constructor(private readonly appFacadeService: AppFacadeService) {}

  remove(): void {
    this.appFacadeService.removeItemCart(this.product.id);
  }
}
