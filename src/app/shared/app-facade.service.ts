import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from '@app/modules/user/store/user.actions';
import { getProducts } from '../modules/listing/store/listing.actions';
import { addItemCart } from '../modules/cart/store/cart.actions';
import { IProduct } from './models/shared.model';

@Injectable({
  providedIn: 'root',
})
export class AppFacadeService {
  //   todoList$ = this.store.select(getLoadedTodoList);

  constructor(private store: Store) {}

  loadUser(): void {
    this.store.dispatch(getUser());
  }

  addItemCart(product: IProduct): void {
    this.store.dispatch(addItemCart({ product }));
  }
}
