import { Component } from '@angular/core';
import { ProductFacadeService } from '../services/product-facade.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: 'listing.page.html',
  styleUrls: ['listing.page.scss'],
})
export class ListingPage {
  constructor(private readonly productFacadeService: ProductFacadeService) {
    this.productFacadeService.loadProducts();
  }
}
