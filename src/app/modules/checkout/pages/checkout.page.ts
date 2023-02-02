import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProductUI } from '@app/shared/models/shared.model';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { AppFacadeService } from '../../../shared/app-facade.service';
import { PlaceOrderInput } from '../../../shared/models/shared.model';

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
    private readonly appFacadeService: AppFacadeService
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
    const input = this.buildInput();
  }

  private buildInput(): PlaceOrderInput {
    const dataForm = this.form.getRawValue();
    return {
      products: this.cartItems.map((product: IProductUI) => ({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      })),
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
      this.appFacadeService.cartTotalPrice$,
      this.appFacadeService.cartItems$,
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([cartTotalPrice, cartItems]) => {
        this.totalPrice = cartTotalPrice;
        this.cartItems = cartItems;
      });
  }
}
