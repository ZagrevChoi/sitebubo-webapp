import { environment } from './../../../environments/environment.prod';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';

import { AuthService } from 'src/app/core/services/auth.service';

import { DomainInfo } from './../models/domain';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DomainService {
  domainInfo: DomainInfo;
  domainInfo$: BehaviorSubject<DomainInfo> = new BehaviorSubject<DomainInfo>(this.domainInfo);

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router,
    private authService: AuthService
  ) { }

  refresh(): any {
    const isLoggedIn = this.authService.isLoggedIn$;
    if (isLoggedIn) {
      return this.getDomainInfoByUserId().toPromise();
    } else {
      this.domainInfo = null;
      this.domainInfo$.next(this.domainInfo);
      return null;
    }
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
