import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginResponse, User } from '../models/auth';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';

import { DomainService } from './domain.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);

  user: User;
  user$: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);

  set accessToken(value: string) {
    this.localStorage.set(environment.localStorage.accessToken, value);
  }

  get accessToken(): string {
    return this.localStorage.get(environment.localStorage.accessToken);
  }

  get isLoggedIn(): boolean {
    return Boolean(this.accessToken);
  }

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router,
    private domainService: DomainService
  ) { }


  login(email: string, passwordTemp: string): Observable<LoginResponse> {
    let password = Md5.hashStr(passwordTemp);
    const url = `${environment.api}login`;
    return this.http.post<LoginResponse>(url, { email, password }).pipe(tap(res => {
      if (res) {
        this.authenticateUser(res.token);
      }
    }))
  }

  signup(fullname: string, email: string, passwordTemp: string): Observable<boolean> {
    let password = Md5.hashStr(passwordTemp);
    const url = `${environment.api}signup`;
    return this.http.post<boolean>(url, { fullname, email, password }).pipe(tap(res => {
      
    }));
  }

  logout() {
    this.accessToken = null;
    this.isLoggedIn$.next(this.isLoggedIn);
    this.domainService.refresh(this.isLoggedIn).then(() => {
      this.user = null;
      this.user$.next(this.user);
      this.router.navigate(['']);
    });
  }

  forgetPassword(email: string): Observable<any> {
    const url = `${environment.api}forgot-password`;
    return this.http.post(url, { email });
  }

  resetPassword(password: string, resetToken: string): Observable<any> {
    const url = `${environment.api}auth/reset-password`;
    return this.http.post(url, {password, resetToken});
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    const url = `${environment.api}auth/change-password`;
    return this.http.post(url, {oldPassword, newPassword});
  }

  verifyEmail(verifyToken: string): Observable<any> {
    const url = `${environment.api}auth/verify`;
    return this.http.post(url, {verifyToken}).pipe(
      tap(() => {
        if (this.user) {
          this.user.verified = true;
          this.user$.next(this.user);
        }
      })
    );
  }

  resendVerificationEmail(): Observable<any> {
    const url = `${environment.api}/auth/resend-verification`;
    return this.http.post(url, null);
  }

  getAuth(): Observable<any> {
    const url = `${environment.api}user/getuserdetails`;
    return this.http.get<any>(url).pipe(
      tap(res => {
        console.log(res);
        this.user = res;
        this.user$.next(this.user);
      })
    );
  }

  authenticateUser(token: string) {
    this.accessToken = token;
    this.isLoggedIn$.next(this.isLoggedIn);
    this.getAuth().toPromise();
  }
}
