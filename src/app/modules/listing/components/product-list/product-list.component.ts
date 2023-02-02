import { Component } from '@angular/core';
import { IProductUI } from '@app/shared/models/shared.model';
import { Observable } from 'rxjs';
import { ProductFacadeService } from '../../services/product-facade.service';
import { AppFacadeService } from '../../../../shared/app-facade.service';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent {
  productsList$: Observable<IProductUI[]>;
  constructor(
    private readonly productFacadeService: ProductFacadeService,
    private readonly appFacadeService: AppFacadeService
  ) {
    this.productsList$ = this.productFacadeService.productsList$;
  }

  addProduct(product: IProductUI): void {
    this.appFacadeService.addItemCart(product);
  }
}
