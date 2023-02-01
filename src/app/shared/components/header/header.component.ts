import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacadeService } from '../../app-facade.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  walletAmount$: Observable<number | undefined>;
  cartCounter$: Observable<number>;
  constructor(private appFacadeService: AppFacadeService) {
    this.walletAmount$ = this.appFacadeService.walletAmount$;
    this.cartCounter$ = this.appFacadeService.cartCounter$;
  }
}
