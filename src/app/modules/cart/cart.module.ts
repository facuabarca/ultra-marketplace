import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CartFacadeService } from './services/cart-facade.service';
import { cartReducers } from './store/cart.reducer';

@NgModule({
  imports: [StoreModule.forFeature('cart', cartReducers)],
  providers: [CartFacadeService],
})
export class CartModule {}
