import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isSpinning: boolean;

  loginForm: FormGroup;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private route: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
      this.notification.warning(
        'Form Validation',
        'Please fill in all required fields.',
        { nzDuration: 3000 }
      );
      return;
    }

    this.isSpinning = true;
    console.log(this.loginForm.value);
    
    this.service.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.isSpinning = false;
        
        // Handle the new response structure
        const authData = response.authentication || response;
        
        if (authData.userId != null && authData.jwt) {
          const user = {
            userId: authData.userId,
            userRole: authData.userRole,
          }
          console.log('User data:', user);
          StorageService.saveToken(authData.jwt);
          StorageService.saveUser(user);
          
          this.notification.success(
            'SUCCESS',
            response.message || 'You have successfully logged in!',
            { nzDuration: 5000 }
          );
          
          if (StorageService.isAdminLoggedIn()) {
            this.route.navigateByUrl('admin/dashboard');
          } else if (StorageService.isCustomerLoggedIn()) {
            this.route.navigateByUrl('customer/dashboard');
          } else {
            this.notification.error('ERROR', 'Invalid user role', { nzDuration: 5000 });
            return;
          }
          
          this.loginForm.reset();
          console.log('Login successful', response);
        } else {
          this.notification.error('ERROR', 'Invalid response from server', { nzDuration: 5000 });
        }
      },
      error: (error) => {
        this.isSpinning = false;
        console.error('Login failed', error);
        
        let errorTitle = 'Login Error';
        let errorMessage = 'Login failed. Please try again.';
        
        if (error.error && error.error.type) {
          switch (error.error.type) {
            case 'login_validation':
              errorTitle = 'Login Validation Error';
              break;
            case 'authentication':
              errorTitle = 'Authentication Error';
              break;
            default:
              errorTitle = 'Login Error';
          }
        }
        
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.error && typeof error.error === 'string') {
          errorMessage = error.error;
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        this.notification.error(errorTitle, errorMessage, { nzDuration: 5000 });
      },
    });
  }

}
