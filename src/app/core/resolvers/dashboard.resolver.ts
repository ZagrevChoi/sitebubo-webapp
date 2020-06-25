import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Dashboard } from './../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<Dashboard> {

  constructor(
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dashboard> | Promise<Dashboard> | Dashboard {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          newUserCount: 10,
          ytd: 450000
        });
      }, 1000);
    });
  }
}
