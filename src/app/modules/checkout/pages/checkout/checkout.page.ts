import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { Purchase } from '../../store/checkout.state';
import { CheckoutFacadeService } from '../../services/checkout-facade.service';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutPage implements OnInit, OnDestroy {
  form!: FormGroup;
  totalPrice: number = 0;
  cartItems: number[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private readonly checkoutFacadeService: CheckoutFacadeService
  ) {
    this.getData();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit(): void {
    const input = this.buildPucharseInput();
    this.checkoutFacadeService.purchase(input);
  }

  private buildPucharseInput(): Purchase {
    const dataForm = this.form.getRawValue();
    return {
      purchasedProducts: this.cartItems.map((product: number) => product),
      user: {
        name: dataForm.personalData.name,
        surname: dataForm.personalData.surname,
        email: dataForm.personalData.email,
        street: dataForm.personalAddress.street,
        city: dataForm.personalAddress.city,
        state: dataForm.personalAddress.state,
      },
      totalPrice: this.totalPrice,
    };
  }

  private buildForm(): void {
    this.form = this.fb.group({
      personalData: this.fb.group({
        name: [null, [Validators.required, Validators.minLength(3)]],
        surname: [null, [Validators.required, Validators.minLength(3)]],
        email: [
          null,
          [Validators.required, Validators.minLength(3), Validators.email],
        ],
      }),
      personalAddress: this.fb.group({
        street: [null, [Validators.required, Validators.minLength(3)]],
        city: [null, [Validators.required, Validators.minLength(3)]],
        state: [null, [Validators.required, Validators.minLength(3)]],
      }),
    });
  }

  private getData(): void {
    combineLatest([
      this.checkoutFacadeService.totalPrice$,
      this.checkoutFacadeService.cartItems$,
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([cartTotalPrice, cartItems]) => {
        this.totalPrice = cartTotalPrice;
        this.cartItems = cartItems;
      });
  }
}
