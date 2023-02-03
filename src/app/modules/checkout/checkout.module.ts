import { NgModule } from '@angular/core';

import { CheckoutPage } from './pages/checkout.page';
import { RouterModule } from '@angular/router';
import { routes } from './checkout.routes';
import { PersonalAddressComponent } from './components/personal-address/personal-address.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CheckoutDataService } from './services/checkout-data.service';
import { CheckoutFacadeService } from './services/checkout-facade.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CheckoutEffects } from './store/checkout.effects';
import { checkoutReducers } from './store/checkout.reducer';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('checkout', checkoutReducers),
    EffectsModule.forFeature([CheckoutEffects]),
    CommonModule,
    SharedModule,
  ],
  exports: [CheckoutPage, PersonalAddressComponent, PersonalDataComponent],
  declarations: [CheckoutPage, PersonalAddressComponent, PersonalDataComponent],
  providers: [CheckoutDataService, CheckoutFacadeService],
})
export class CheckoutModule {}
