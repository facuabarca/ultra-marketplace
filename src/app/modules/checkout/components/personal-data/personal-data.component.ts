import { Component, Host, SkipSelf, OnInit, Input } from '@angular/core';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: 'personal-data.component.html',
})
export class PersonalDataComponent implements OnInit {
  @Input() formGroupName: string;

  form!: FormGroup;

  constructor(
    @Host() @SkipSelf() private formGroupDirective: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.form = this.formGroupDirective.form as FormGroup;
  }
}
