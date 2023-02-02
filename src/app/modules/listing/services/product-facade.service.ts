import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from '../store/listing.selector';
import { getProducts } from '../store/listing.actions';
import { Observable } from 'rxjs';
import { IProductUI } from '../../../shared/models/shared.model';

@Injectable({
  providedIn: 'root',
})
export class ProductFacadeService {
  productsList$: Observable<IProductUI[]> = this.store.select(selectProducts);

  constructor(private store: Store) {}

  loadProducts(): void {
    this.store.dispatch(getProducts());
  }
}
