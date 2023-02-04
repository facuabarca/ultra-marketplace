import { Component, Input } from '@angular/core';
import { IProductUI } from '../../../../shared/models/shared.model';
import { ListingFacadeService } from '../../services/listing-facade.service';
@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: IProductUI;

  constructor(private readonly listingFacadeService: ListingFacadeService) {}

  addProduct(): void {
    this.listingFacadeService.addItemCart(this.product.id);
  }
}
