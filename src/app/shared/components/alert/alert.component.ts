import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable, timer, Subject, takeUntil } from 'rxjs';
import { Alert } from '../../../core/store/app.state';
import { SharedFacadeService } from '../../shared-facade.service';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnDestroy {
  alert$: Observable<Alert>;

  private unsubscribe$ = new Subject<void>();

  constructor(private readonly sharedFacadeService: SharedFacadeService) {
    this.alert$ = this.sharedFacadeService.alert$;
    timer(5000)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.sharedFacadeService.removeAlert();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
