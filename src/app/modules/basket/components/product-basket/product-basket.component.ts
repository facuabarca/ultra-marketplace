import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductUI } from '../../../../shared/models/shared.model';

@Component({
  selector: 'app-product-basket',
  templateUrl: 'product-basket.component.html',
  styleUrls: ['product-basket.component.scss'],
})
export class ProductBasketComponent {
  @Input() product!: IProductUI;
  @Output() onDeleteProduct = new EventEmitter<number>();

  addProduct(): void {
    this.onDeleteProduct.emit(this.product.id);
  }
}
