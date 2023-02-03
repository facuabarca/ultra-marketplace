import { Component } from '@angular/core';
import { IProductUI } from '@app/shared/models/shared.model';
import { Observable, combineLatest, map } from 'rxjs';
import { ListingFacadeService } from '../../services/listing-facade.service';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent {
  productsList$: Observable<IProductUI[]>;

  constructor(private readonly listingFacadeService: ListingFacadeService) {
    this.productsList$ = combineLatest([
      this.listingFacadeService.productsList$,
      this.listingFacadeService.cartItems$,
      this.listingFacadeService.userProductsPurchased$,
    ]).pipe(
      map(([productsApi, cartItems, productsPurchased]) => {
        productsApi = productsApi.filter(
          (product: IProductUI) => !productsPurchased.includes(product.id)
        );
        productsApi = productsApi.map((product: IProductUI) => {
          return {
            ...product,
            disabled: cartItems.some(
              (cartItem: IProductUI) => cartItem.id === product.id
            ),
          };
        });
        return productsApi;
      })
    );
  }

  addProduct(product: IProductUI): void {
    this.listingFacadeService.addItemCart(product);
  }
}
