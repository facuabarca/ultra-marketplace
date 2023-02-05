import {
  ChangeDetectionStrategy,
  Component,
  Host,
  Input,
  OnInit,
  SkipSelf,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-personal-address',
  templateUrl: 'personal-address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalAddressComponent implements OnInit {
  @Input() formGroupName: string;

  form!: FormGroup;

  constructor(
    @Host() @SkipSelf() private formGroupDirective: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.form = this.formGroupDirective.form as FormGroup;
  }
}
