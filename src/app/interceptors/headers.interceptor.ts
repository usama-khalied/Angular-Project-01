import { Injectable , Injector} from '@angular/core';
import { UserService } from '../jwt-authentication/user.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private injector : Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let userService = this.injector.get(UserService);
    let tokenizedReq = request.clone({
      setHeaders:{
        Authorization: `Bearer ${userService.getToken()}`,
      }
    })
    console.log(request)
    return next.handle(tokenizedReq);
  }
}


// Ruff Section 
// 'Content-Type' : 'application/json; charset=utf-8',
// 'Accept'       : 'application/json',
// 'Authorization': `Bearer ${userService.getToken()}`,