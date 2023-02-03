import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from '../store/listing.selector';
import { getProducts } from '../store/listing.actions';
import { Observable } from 'rxjs';
import { IProductUI } from '../../../shared/models/shared.model';
import { CartFacadeService } from '@app/modules/cart/services/cart-facade.service';
import { UserFacadeService } from '../../user/services/user-facade.service';

@Injectable({
  providedIn: 'root',
})
export class ListingFacadeService {
  productsList$: Observable<IProductUI[]>;
  cartItems$: Observable<IProductUI[]>;
  userProductsPurchased$: Observable<number[]>;

  constructor(
    private readonly store: Store,
    private readonly cartFacadeService: CartFacadeService,
    private readonly userFacadeService: UserFacadeService
  ) {
    this.productsList$ = this.store.select(selectProducts);
    this.cartItems$ = this.cartFacadeService.cartItems$;
    this.userProductsPurchased$ = this.userFacadeService.userProductsPurchased$;
  }

  loadProducts(): void {
    this.store.dispatch(getProducts());
  }

  addItemCart(product: IProductUI): void {
    this.cartFacadeService.addItemCart(product);
  }
}
