import { Directive, ElementRef, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[error]',
})
export class ErrorDirective {
  constructor(private control: NgControl) {}

  @HostBinding('class.is-invalid') get invalid() {
    return this.control.errors && this.control.touched;
  }
}
