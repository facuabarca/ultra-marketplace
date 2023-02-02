import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductUI } from '../../../../shared/models/shared.model';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: ['product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: IProductUI;
  @Input() disabled: boolean = false;
  @Output() onAddProduct = new EventEmitter();

  addProduct(): void {
    this.disabled = !this.disabled;
    this.onAddProduct.emit(this.product);
  }
}
