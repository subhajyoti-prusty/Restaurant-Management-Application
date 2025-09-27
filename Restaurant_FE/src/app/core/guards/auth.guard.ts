import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = StorageService.getToken();
    
    if (token) {
      // Check if user is admin and trying to access admin routes
      if (state.url.includes('/admin')) {
        if (StorageService.isAdminLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
      
      // Check if user is customer and trying to access customer routes
      if (state.url.includes('/customer')) {
        if (StorageService.isCustomerLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
      
      // For other protected routes, just check if user is logged in
      return true;
    }
    
    // No token, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}