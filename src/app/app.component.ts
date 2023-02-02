import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacadeService } from './shared/app-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showAlert$!: Observable<boolean>;

  constructor(private readonly appFacadeService: AppFacadeService) {
    this.showAlert$ = this.appFacadeService.showAlert$;
    this.appFacadeService.loadUser();
  }

  title = 'ultra-marketplace';
}
