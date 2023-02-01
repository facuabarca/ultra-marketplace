import { Component, OnInit } from '@angular/core';
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
