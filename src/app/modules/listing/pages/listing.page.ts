import { Component } from '@angular/core';
import { ListingFacadeService } from '../services/listing-facade.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: 'listing.page.html',
  styleUrls: ['listing.page.scss'],
})
export class ListingPage {
  constructor(private readonly listingFacadeService: ListingFacadeService) {
    this.listingFacadeService.loadProducts();
  }
}
