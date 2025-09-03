import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isSpinning: boolean;
  signupForm: FormGroup;

  checkPassword = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    }
    if (control.value !== this.signupForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.checkPassword]],
    });
  }

  signup() {
    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).forEach(key => {
        this.signupForm.get(key)?.markAsTouched();
      });
      this.notification.warning(
        'Form Validation',
        'Please fill in all required fields correctly.',
        { nzDuration: 3000 }
      );
      return;
    }

    // Additional client-side validation
    const formValue = this.signupForm.value;
    
    if (formValue.password !== formValue.confirmPassword) {
      this.notification.error(
        'Validation Error',
        'Passwords do not match.',
        { nzDuration: 3000 }
      );
      return;
    }

    if (formValue.password.length < 6) {
      this.notification.error(
        'Validation Error',
        'Password must be at least 6 characters long.',
        { nzDuration: 3000 }
      );
      return;
    }

    this.isSpinning = true;
    console.log(this.signupForm.value);
    
    this.service.signup(this.signupForm.value).subscribe({
      next: (response) => {
        this.isSpinning = false;
        this.notification.success(
          'SUCCESS',
          response.message || 'You have successfully signed up!',
          { nzDuration: 5000 }
        );
        this.signupForm.reset();
        console.log('Signup successful', response);
      },
      error: (error) => {
        this.isSpinning = false;
        console.error('Signup failed', error);
        
        let errorTitle = 'Signup Error';
        let errorMessage = 'Signup failed. Please try again.';
        
        if (error.error && error.error.type) {
          switch (error.error.type) {
            case 'signup_validation':
              errorTitle = 'Signup Validation Error';
              break;
            case 'validation':
              errorTitle = 'Form Validation Error';
              break;
            default:
              errorTitle = 'Signup Error';
          }
        }
        
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.error && typeof error.error === 'string') {
          errorMessage = error.error;
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        // Handle field-specific errors if available
        if (error.error && error.error.fieldErrors) {
          const fieldErrors = error.error.fieldErrors;
          let fieldErrorMessage = 'Please check the following fields:\n';
          Object.keys(fieldErrors).forEach(field => {
            fieldErrorMessage += `• ${field}: ${fieldErrors[field]}\n`;
          });
          errorMessage = fieldErrorMessage;
        }
        
        this.notification.error(errorTitle, errorMessage, { nzDuration: 5000 });
      },
    });
  }
}
