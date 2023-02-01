import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { getUser, getUserSuccess } from './user.actions';
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
      map((user: IUserData) => getUserSuccess({ user }))
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
