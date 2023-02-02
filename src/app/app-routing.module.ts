import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketModule } from './modules/basket/basket.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    loadChildren: () =>
      import('./modules/listing/listing.module').then((m) => m.ListingModule),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./modules/basket/basket.module').then((m) => m.BasketModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./modules/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
