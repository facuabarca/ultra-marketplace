/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class ApiBridgeService {
  constructor(private httpClient: HttpClient) {}
  get<T>(url: string, queryParams: any = null): Observable<T> {
    let params = new HttpParams();
    if (queryParams) {
      params = Object.getOwnPropertyNames(queryParams).reduce(
        (p, key) => p.set(key, queryParams[key]),
        new HttpParams()
      );
    }
    return this.httpClient.get<T>(env.api_url + url, { params });
  }
}
