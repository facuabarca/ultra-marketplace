import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserFacadeService } from './modules/user/services/user-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly userFacadeService: UserFacadeService) {
    this.userFacadeService.loadUser();
  }
  title = 'ultra-marketplace';
}
