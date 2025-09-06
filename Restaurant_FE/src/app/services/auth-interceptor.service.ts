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
        // Handle new ApiResponse error structure for authentication errors
        if (error.status === 401) {
          const errorResponse = error.error;
          
          // Check if it's an ApiResponse structure
          if (errorResponse && errorResponse.status === 'UNAUTHORIZED') {
            this.handleAuthenticationError(error);
          }
          // Legacy error structure support (for backward compatibility)
          else if (errorResponse && errorResponse.type === 'authentication') {
            this.handleAuthenticationError(error);
          }
          // Handle other 401 errors
          else {
            this.handleAuthenticationError(error);
          }
        }
        
        return throwError(() => error);
      })
    );
  }

  private handleAuthenticationError(error: HttpErrorResponse): void {
    const errorResponse = error.error;
    
    // Don't auto-logout for login validation errors or if we're on login/signup pages
    const currentUrl = this.router.url;
    if (currentUrl.includes('/login') || currentUrl.includes('/signup')) {
      return;
    }
    
    // Clear stored authentication data
    StorageService.logout();
    
    let message = 'Authentication failed. Please login again.';
    
    // Handle new ApiResponse error structure
    if (errorResponse && errorResponse.message) {
      message = errorResponse.message;
    }
    // Legacy error structure support
    else if (errorResponse && errorResponse.error) {
      switch (errorResponse.error) {
        case 'JWT_TOKEN_EXPIRED':
          message = 'Your session has expired. Please login again.';
          break;
        case 'INVALID_JWT_TOKEN':
          message = 'Invalid authentication token. Please login again.';
          break;
        case 'INVALID_JWT_SIGNATURE':
          message = 'Invalid authentication signature. Please login again.';
          break;
        default:
          message = errorResponse.message || message;
      }
    }
    
    this.notification.error(
      'Authentication Error',
      message,
      { nzDuration: 5000 }
    );
    
    // Redirect to login
    this.router.navigate(['/login']);
  }
}
