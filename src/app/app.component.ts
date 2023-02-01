import { Component, OnInit } from '@angular/core';
import { getUser } from '@app/modules/user/store/user.actions';
import { selectUser } from '@app/modules/user/store/user.selector';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { AppFacadeService } from './shared/app-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly appFacadeService: AppFacadeService) {}

  ngOnInit(): void {
    this.appFacadeService.loadUser();
  }
  title = 'ultra-marketplace';
}
