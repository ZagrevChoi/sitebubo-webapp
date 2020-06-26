import { environment } from './../../../environments/environment.prod';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainInfo } from './../models/domain';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DomainService {
  domainInfo: DomainInfo;
  domainInfo$: BehaviorSubject<DomainInfo> = new BehaviorSubject<DomainInfo>(this.domainInfo);

  constructor(
    private http: HttpClient
  ) { }

  refresh(isLoggedIn): any {
    return new Promise((resolve) => {
      if (isLoggedIn) {
        const result = this.getDomainInfoByUserId().toPromise();
        resolve(result);
      } else {
        this.domainInfo = null;
        this.domainInfo$.next(this.domainInfo);
        resolve(null);
      }
    });
  }

  getDomainInfoByUserId(): Observable<DomainInfo> {
    const url = `${environment.api}domain/getdomainbyuser`;
    return this.http.get<DomainInfo>(url).pipe(
      tap(res => {
        console.log(res);
        this.domainInfo = res;
        this.domainInfo$.next(this.domainInfo);
      })
    );
  }
}
