import { NgModule } from '@angular/core';

import { CheckoutPage } from './pages/checkout.page';
import { RouterModule } from '@angular/router';
import { routes } from './checkout.routes';
import { PersonalAddressComponent } from './components/personal-address/personal-address.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [CheckoutPage, PersonalAddressComponent, PersonalDataComponent],
  declarations: [CheckoutPage, PersonalAddressComponent, PersonalDataComponent],
})
export class CheckoutModule {}
