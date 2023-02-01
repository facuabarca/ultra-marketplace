/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@environment/environment';
import { Observable } from 'rxjs';

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

  post<T>(url: string, body: any = {}, headers?: any): Observable<T> {
    return this.httpClient.post<T>(env.api_url + url, body, {
      headers: new HttpHeaders({
        ...headers,
        'Content-Type': 'application/json; charset=utf-8',
      }),
    });
  }
}
