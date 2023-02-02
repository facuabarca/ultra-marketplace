import { Component, OnDestroy } from '@angular/core';
import { AppFacadeService } from '@app/shared/app-facade.service';
import { Observable, timer, Subject, takeUntil } from 'rxjs';
import { Alert } from '../../../core/store/app.state';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
})
export class AlertComponent implements OnDestroy {
  alert$: Observable<Alert>;

  private unsubscribe$ = new Subject<void>();

  constructor(private readonly appFacadeService: AppFacadeService) {
    this.alert$ = this.appFacadeService.alert$;
    timer(5000)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.appFacadeService.removeAlert();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
