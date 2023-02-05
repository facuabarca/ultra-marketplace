import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListingFacadeService } from '../services/listing-facade.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: 'listing.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingPage {
  constructor(private readonly listingFacadeService: ListingFacadeService) {
    this.listingFacadeService.loadProducts();
  }
}
