import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './listing.routes';

import { ListingPage } from './pages/listing/listing.page';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ListingPage],
})
export class ListingModule {}
