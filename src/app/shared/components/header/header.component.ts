import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedFacadeService } from '../../shared-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  walletAmount$: Observable<number>;
  cartCounter$: Observable<number>;
  showAlert$!: Observable<boolean>;
  constructor(private sharedFacadeService: SharedFacadeService) {
    this.walletAmount$ = this.sharedFacadeService.walletAmount$;
    this.cartCounter$ = this.sharedFacadeService.cartCounter$;
    this.showAlert$ = this.sharedFacadeService.showAlert$;
  }
}
