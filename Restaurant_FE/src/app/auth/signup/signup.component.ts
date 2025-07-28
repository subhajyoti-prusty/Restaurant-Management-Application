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
    console.log(this.signupForm.value);
    this.service.signup(this.signupForm.value).subscribe({
      next: (response) => {
        this.notification.success(
          'SUCCESS',
          'You have successfully signed up!',
          { nzDuration: 5000 }
        );
        this.signupForm.reset();
        console.log('Signup successful', response);
      },
      error: (error) => {
        const errorMessage = error.error;
        this.notification.error('ERROR', errorMessage, { nzDuration: 5000 });
        console.error('Signup failed', error);
      },
    });
  }
}
