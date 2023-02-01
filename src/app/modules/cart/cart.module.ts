import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartReducers } from './store/cart.reducer';

@NgModule({
  imports: [StoreModule.forFeature('cart', cartReducers)],
})
export class CartModule {}
