import { Routes } from '@angular/router';
import { CheckoutPage } from './pages/checkout/checkout.page';
import { CheckoutSuccessPage } from './pages/checkout-success/checkout-success.component';

export const routes: Routes = [
  {
    path: '',
    component: CheckoutPage,
  },
  {
    path: 'success',
    component: CheckoutSuccessPage,
  },
];
