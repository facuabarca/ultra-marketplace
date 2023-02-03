import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './listing.routes';

import { ListingPage } from './pages/listing.page';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { listingReducers } from './store/listing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ListingEffects } from './store/listing.effects';
import { ProductDataService } from './services/product-data.service';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StoreModule.forFeature('listing', listingReducers),
    EffectsModule.forFeature([ListingEffects]),
  ],
  declarations: [ListingPage, ProductListComponent, ProductCardComponent],
  providers: [ProductDataService],
})
export class ListingModule {}
