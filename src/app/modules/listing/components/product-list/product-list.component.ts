import { Component } from '@angular/core';
import { IProductUI } from '@app/shared/models/shared.model';
import { Observable } from 'rxjs';
import { ListingFacadeService } from '../../services/listing-facade.service';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss'],
})
export class ProductListComponent {
  productsList$: Observable<IProductUI[]>;

  constructor(private readonly listingFacadeService: ListingFacadeService) {
    this.productsList$ = this.listingFacadeService.productsList$;
  }
}
