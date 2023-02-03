import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedFacadeService } from './shared/shared-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly sharedFacadeService: SharedFacadeService) {
    this.sharedFacadeService.loadUser();
  }
  title = 'ultra-marketplace';
}
