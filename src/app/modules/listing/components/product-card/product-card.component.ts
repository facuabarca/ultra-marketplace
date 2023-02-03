import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductUI } from '../../../../shared/models/shared.model';
@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: IProductUI;
  @Output() onAddProduct = new EventEmitter();

  addProduct(): void {
    this.onAddProduct.emit(this.product.id);
  }
}
