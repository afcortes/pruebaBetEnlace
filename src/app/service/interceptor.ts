import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      switch (err.status) {
        case 400: {
          console.error('Parámetros inválidos o no enviados')
          break
        }
        case 401: {
          const refresh = JSON.parse(localStorage.getItem('refresh'))
          if (err.error?.detailed) console.error(err.error.detailed)
          break
        }
        case 500: {
          console.error('Error en el servidor')
          break
        }
        default: {
          if (err.error?.detailed) console.error(err.error.detailed)
          break
        }
      }
      return throwError(err);
    }));
  }
}