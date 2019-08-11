import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth-modal/auth.service';

@Injectable()
export class AuthInterceptor<CredentialsType, AuthType> implements HttpInterceptor {
  constructor(
    private _authService: AuthService<CredentialsType, AuthType>,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._authService.authDataSource.interceptHttp$(req, next);
  }
}
