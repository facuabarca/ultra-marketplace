import { NgModule } from '@angular/core';
import { BasketPage } from './pages/basket.page';
import { RouterModule } from '@angular/router';
import { routes } from './basket.routes';
import { ProductBasketListComponent } from './components/product-basket-list/product-basket-list.component';
import { ProductBasketComponent } from './components/product-basket/product-basket.component';
import { CommonModule } from '@angular/common';
import { BasketFacadeService } from './services/basket-facade.service';
import { BasketEmptyComponent } from './components/basket-empty/basket-empty.component';

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [BasketPage],
  declarations: [
    BasketPage,
    BasketEmptyComponent,
    ProductBasketListComponent,
    ProductBasketComponent,
  ],
  providers: [BasketFacadeService],
})
export class BasketModule {}
