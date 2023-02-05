import {
  Attribute,
  Directive,
  ElementRef,
  Host,
  HostBinding,
  OnInit,
  Optional,
  Renderer2,
  SkipSelf,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { ERRORS_TEXT } from '../models/errors.model';

@Directive({
  selector: '[appError]',
})
export class ErrorDirective implements OnInit {
  private control!: AbstractControl;
  private divControl?: ElementRef;

  constructor(
    @Host() @SkipSelf() @Optional() private controlContainer: ControlContainer,
    @Attribute('formControlName') private controlName: string,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  @HostBinding('class.is-invalid')
  get invalid() {
    if (this.control.touched) {
      if (this.divControl) {
        this.removeEl();
      }
      if (this.control.errors) {
        this.createEl();
      }
      return this.control.errors;
    }
    return false;
  }

  ngOnInit(): void {
    if (this.controlContainer && this.controlName) {
      this.control = this.controlContainer.control?.get(
        this.controlName
      ) as AbstractControl;
    }
  }

  private createEl(): void {
    this.divControl = this.renderer.createElement('small');
    const text = this.renderer.createText(this.getError());

    this.renderer.appendChild(this.divControl, text);
    this.renderer.addClass(this.divControl, 'is-invalid');
    const parentNode = this.renderer.parentNode(this.el.nativeElement);
    parentNode.appendChild(this.divControl);
  }

  private removeEl(): void {
    this.renderer.removeChild(
      this.renderer.parentNode(this.el.nativeElement),
      this.divControl
    );
    this.divControl = undefined;
  }

  private getError(): string {
    const key = Object.keys(this.control.errors as FormControl)[0];
    if (key === 'minlength') return this.getMinLengthError(key);
    return ERRORS_TEXT[key];
  }

  private getMinLengthError(key: string): string {
    const control = (this.control.errors as ValidationErrors)['minlength'];
    const quantity = control.requiredLength - control.actualLength;
    return `${quantity} ${ERRORS_TEXT[key]}`;
  }
}
