import { Injectable } from '@angular/core';
import { IUserData } from '@app/shared/models/shared.model';
import { map, Observable, tap } from 'rxjs';
import { ApiBridgeService } from '../../../core/services/api-bridge.service';

@Injectable()
export class UserDataService {
  constructor(private apiBridgeService: ApiBridgeService) {}

  public getUser(id: number): Observable<IUserData> {
    return this.apiBridgeService
      .get(`users?id=${id}`)
      .pipe(map((users) => this.helperResult(users as IUserData[])));
  }

  private helperResult(users: IUserData[]): IUserData {
    return users[0];
  }
}
