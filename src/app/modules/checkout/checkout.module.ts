import { NgModule } from '@angular/core';

import { CheckoutPage } from './pages/checkout.page';
import { RouterModule } from '@angular/router';
import { routes } from './checkout.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CheckoutPage],
  declarations: [CheckoutPage],
})
export class CheckoutModule {}
