import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckoutFacadeService } from '../../services/checkout-facade.service';
import { Observable } from 'rxjs';
import { Purchase } from '../../store/checkout.state';

@Component({
  selector: 'app-checkout-success',
  templateUrl: 'checkout-success.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutSuccessPage {
  purchase$: Observable<Purchase>;
  constructor(private readonly checkoutFacadeService: CheckoutFacadeService) {
    this.purchase$ = this.checkoutFacadeService.lastPurchase$;
  }
}
