import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacadeService } from '../../app-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  walletAmount$: Observable<number | undefined>;
  cartCounter$: Observable<number>;
  showAlert$!: Observable<boolean>;
  constructor(private appFacadeService: AppFacadeService) {
    this.walletAmount$ = this.appFacadeService.walletAmount$;
    this.cartCounter$ = this.appFacadeService.cartCounter$;
    this.showAlert$ = this.appFacadeService.showAlert$;
  }
}
