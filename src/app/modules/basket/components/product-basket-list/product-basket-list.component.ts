import { Component, Input, Output } from '@angular/core';
import { IProduct } from '@app/shared/models/shared.model';
import { Observable } from 'rxjs';
import { AppFacadeService } from '../../../../shared/app-facade.service';

@Component({
  selector: 'app-product-basket-list',
  templateUrl: 'product-basket-list.component.html',
  styleUrls: ['product-basket-list.component.scss'],
})
export class ProductBasketListComponent {
  @Input() cartItems!: IProduct[];
  constructor(private readonly appFacadeService: AppFacadeService) {}
}
