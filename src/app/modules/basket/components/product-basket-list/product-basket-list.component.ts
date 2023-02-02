import { Component, Input, Output } from '@angular/core';
import { IProductUI } from '@app/shared/models/shared.model';
import { AppFacadeService } from '../../../../shared/app-facade.service';

@Component({
  selector: 'app-product-basket-list',
  templateUrl: 'product-basket-list.component.html',
  styleUrls: ['product-basket-list.component.scss'],
})
export class ProductBasketListComponent {
  @Input() cartItems!: IProductUI[];
  constructor(private readonly appFacadeService: AppFacadeService) {}
}
