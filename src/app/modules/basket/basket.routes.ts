import { Routes } from '@angular/router';
import { BasketGuard } from './guards/basket.guard';
import { BasketPage } from './pages/basket.page';

export const routes: Routes = [
  {
    path: '',
    component: BasketPage,
    canActivate: [BasketGuard],
  },
];
