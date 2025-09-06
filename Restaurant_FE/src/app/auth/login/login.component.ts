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
        
        // Handle the new ApiResponse structure
        if (response.status === 'SUCCESS' && response.data) {
          const authData = response.data;
          
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
        } else {
          this.notification.error('ERROR', response.message || 'Login failed', { nzDuration: 5000 });
        }
      },
      error: (error) => {
        this.isSpinning = false;
        console.error('Login failed', error);
        
        let errorTitle = 'Login Error';
        let errorMessage = 'Login failed. Please try again.';
        
        // Handle new ApiResponse error structure
        if (error.error) {
          const errorResponse = error.error;
          
          if (errorResponse.status) {
            switch (errorResponse.status) {
              case 'UNAUTHORIZED':
                errorTitle = 'Authentication Error';
                break;
              case 'VALIDATION_ERROR':
                errorTitle = 'Validation Error';
                break;
              case 'ERROR':
                errorTitle = 'Login Error';
                break;
              default:
                errorTitle = 'Login Error';
            }
          }
          
          if (errorResponse.message) {
            errorMessage = errorResponse.message;
          } else if (errorResponse.errors && errorResponse.errors.length > 0) {
            errorMessage = errorResponse.errors.join(', ');
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        this.notification.error(errorTitle, errorMessage, { nzDuration: 5000 });
      },
    });
  }

}
