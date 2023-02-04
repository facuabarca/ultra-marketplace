import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from '../store/listing.selector';
import { getProducts } from '../store/listing.actions';
import { combineLatest, map, Observable } from 'rxjs';
import { IProductUI } from '../../../shared/models/shared.model';
import { CartFacadeService } from '../../cart/services/cart-facade.service';
import { UserFacadeService } from '../../user/services/user-facade.service';

@Injectable({
  providedIn: 'root',
})
export class ListingFacadeService {
  productsApi$: Observable<IProductUI[]>;
  productsList$: Observable<IProductUI[]>;
  cartItems$: Observable<number[]>;
  userProductsPurchased$: Observable<number[]>;

  constructor(
    private readonly store: Store,
    private readonly cartFacadeService: CartFacadeService,
    private readonly userFacadeService: UserFacadeService
  ) {
    this.productsApi$ = this.store.select(selectProducts);
    this.cartItems$ = this.cartFacadeService.cartItems$;
    this.userProductsPurchased$ = this.userFacadeService.userProductsPurchased$;

    this.productsList$ = this.getProductList();
  }

  loadProducts(): void {
    this.store.dispatch(getProducts());
  }

  addItemCart(product: number): void {
    this.cartFacadeService.addItemCart(product);
  }

  private getProductList(): Observable<IProductUI[]> {
    return combineLatest([
      this.productsApi$,
      this.cartItems$,
      this.userProductsPurchased$,
    ]).pipe(
      map(([productsApi, cartItems, productsPurchased]) => {
        productsApi = this.filterProductsPurchased(
          productsApi,
          productsPurchased
        );
        return (productsApi = this.markProductInCart(productsApi, cartItems));
      })
    );
  }

  private filterProductsPurchased(
    products: IProductUI[],
    productsPurchased: number[]
  ): IProductUI[] {
    return products?.filter(
      (product: IProductUI) => !productsPurchased.includes(product.id)
    );
  }

  private markProductInCart(
    products: IProductUI[],
    cartItems: number[]
  ): IProductUI[] {
    return products?.map((product: IProductUI) => ({
      ...product,
      disabled: cartItems.some((cartItem: number) => cartItem === product.id),
    }));
  }
}
