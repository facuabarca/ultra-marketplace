import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap, tap, Observable, mergeMap } from 'rxjs';
import { getUser, getUserSuccess } from './user.actions';
import { ApiBridgeService } from '../../../core/services/api-bridge.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { UserDataService } from '../services/user-data.service';
import { IUserData } from '@app/shared/models/shared.model';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private userDataService: UserDataService
  ) {}

  public getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUser),
      mergeMap(() => this.userDataService.getUser(5564)),
      map((user: IUserData) => getUserSuccess({ user: { ...user } }))
    );
  });

  public getUserWallet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUser),
      mergeMap(() => this.userDataService.getUser(5564)),
      map((user: IUserData) => getUserSuccess({ user: { ...user } }))
    );
  });
}
