import { Component } from '@angular/core';
import { IProductUI } from '@app/shared/models/shared.model';
import { Observable, combineLatest, map, filter } from 'rxjs';
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
    this.productsList$ = combineLatest([
      this.productFacadeService.productsList$,
      this.appFacadeService.cartItems$,
      this.appFacadeService.userProductsPurchased$,
    ]).pipe(
      filter((data) => data[0].length > 0),
      map(([productsApi, cartItems, productsPurchased]) => {
        productsApi = productsApi.filter(
          (product: IProductUI) => !productsPurchased.includes(product.id)
        );
        productsApi = productsApi.map((product: IProductUI) => {
          return {
            ...product,
            buttonStatus: cartItems.some(
              (cartItem: IProductUI) => cartItem.id === product.id
            ),
          };
        });
        return productsApi;
      })
    );
  }

  addProduct(product: IProductUI): void {
    this.appFacadeService.addItemCart(product);
  }
}
