import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { StorageService } from './storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private notification: NzNotificationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle authentication errors globally
        if (error.status === 401 && error.error?.type === 'authentication') {
          this.handleAuthenticationError(error);
        }
        
        // Handle login validation errors (don't auto-logout for these)
        if (error.status === 401 && error.error?.type === 'login_validation') {
          // Let the component handle these errors
          return throwError(() => error);
        }
        
        // Handle other authentication-related 401 errors
        if (error.status === 401) {
          this.handleAuthenticationError(error);
        }
        
        return throwError(() => error);
      })
    );
  }

  private handleAuthenticationError(error: HttpErrorResponse): void {
    // Don't auto-logout for login validation errors
    if (error.error?.type === 'login_validation') {
      return;
    }
    
    // Clear stored authentication data
    StorageService.logout();
    
    let message = 'Authentication failed. Please login again.';
    
    if (error.error?.error === 'JWT_TOKEN_EXPIRED') {
      message = 'Your session has expired. Please login again.';
    } else if (error.error?.error === 'INVALID_JWT_TOKEN') {
      message = 'Invalid authentication token. Please login again.';
    } else if (error.error?.error === 'INVALID_JWT_SIGNATURE') {
      message = 'Invalid authentication signature. Please login again.';
    } else if (error.error?.message) {
      message = error.error.message;
    }
    
    this.notification.error(
      'Authentication Error',
      message,
      { nzDuration: 5000 }
    );
    
    // Only redirect to login if not already on auth pages
    const currentUrl = this.router.url;
    if (!currentUrl.includes('/login') && !currentUrl.includes('/signup')) {
      this.router.navigate(['/login']);
    }
  }
}
