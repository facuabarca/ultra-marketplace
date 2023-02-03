import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { getProducts, getProductsSuccess } from './listing.actions';
import { ProductDataService } from '../services/product-data.service';
import { IProduct, IProductUI } from '../../../shared/models/shared.model';

@Injectable()
export class ListingEffects {
  constructor(
    private readonly actions$: Actions,
    private productDataService: ProductDataService
  ) {}

  public getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProducts),
      mergeMap(() => this.productDataService.getProducts()),
      map((products: IProduct[]) =>
        products.map((product: IProduct) => ({
          ...product,
          disabled: false,
        }))
      ),
      map((products: IProductUI[]) => getProductsSuccess({ products }))
    );
  });
}
