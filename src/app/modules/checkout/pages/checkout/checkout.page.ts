import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProductUI } from '@app/shared/models/shared.model';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { Purchase } from '../../store/checkout.state';
import { CheckoutFacadeService } from '../../services/checkout-facade.service';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.page.html',
  styleUrls: ['checkout.page.scss'],
})
export class CheckoutPage implements OnInit, OnDestroy {
  form!: FormGroup;
  totalPrice: number = 0;
  cartItems: IProductUI[] = [];
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
      purchasedProducts: this.cartItems.map(
        (product: IProductUI) => product.id
      ),
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
        name: [null, Validators.required],
        surname: [null, Validators.required],
        email: [null, Validators.required],
      }),
      personalAddress: this.fb.group({
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
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
