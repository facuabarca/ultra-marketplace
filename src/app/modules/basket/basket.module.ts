import { NgModule } from '@angular/core';

import { BasketPage } from './pages/basket.page';
import { RouterModule } from '@angular/router';
import { routes } from './basket.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [BasketPage],
  declarations: [BasketPage],
  providers: [],
})
export class BasketModule {}
