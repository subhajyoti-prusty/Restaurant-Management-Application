import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = StorageService.getToken();
    
    if (token) {
      // User is already logged in, redirect based on role
      if (StorageService.isAdminLoggedIn()) {
        this.router.navigate(['/admin']);
        return false;
      } else if (StorageService.isCustomerLoggedIn()) {
        this.router.navigate(['/customer']);
        return false;
      }
    }
    
    // No token or invalid token, allow access to login/signup pages
    return true;
  }
}