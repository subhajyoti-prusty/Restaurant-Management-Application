import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { StorageService } from '../../services/storage.service';

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
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response.userId != null) {
          const user = {
            userId: response.userId,
            userRole: response.userRole,
          }
          console.log('User data:', user);
          StorageService.saveToken(response.jwt);
          StorageService.saveUser(user);
        } else {
          this.notification.error('ERROR', 'Invalid user credentials', { nzDuration: 5000 });
          return;
        }
        this.notification.success(
          'SUCCESS',
          'You have successfully logged in!',
          { nzDuration: 5000 }
        );
        this.loginForm.reset();
        console.log('Login successful', response);
      },
      error: (error) => {
        const errorMessage = error.error?.message;
        this.notification.error('ERROR', errorMessage, { nzDuration: 5000 });
        console.error('Login failed', error);
      },
    });
  }

}
