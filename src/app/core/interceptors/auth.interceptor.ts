import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const duplicate  = request.clone({ headers: request.headers.set('Authorization', this.authService.accessToken ? 'Bearer ' + this.authService.accessToken: '' ) })
    return next.handle(duplicate).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.authService.logout();
        }
        return throwError(err)
      })
    );
  }
}
