import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    const token = localStorage.getItem('token');

    if(token) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization", token)
      });

      return next.handle(cloned);
    }
    
    return next.handle(request);
  }
}
