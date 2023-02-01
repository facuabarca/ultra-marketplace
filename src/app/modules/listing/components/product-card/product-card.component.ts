import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../shared/models/shared.model';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Output() onAddProduct = new EventEmitter();
  disabled: boolean = false;

  addProduct(): void {
    this.disabled = !this.disabled;
    this.onAddProduct.emit(this.product);
  }
}
