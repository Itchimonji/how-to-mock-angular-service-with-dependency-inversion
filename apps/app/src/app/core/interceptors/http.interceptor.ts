import { HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  // https://angular.io/guide/http#intercepting-requests-and-responses

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('intercept');
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging

    const request = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });

    return next.handle(request)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // Operation failed; error is an HttpErrorResponse
          error => ok = 'failed'
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
          console.log(msg);
        })
      );
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
];
