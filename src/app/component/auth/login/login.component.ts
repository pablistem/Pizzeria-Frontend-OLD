import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest, User } from 'src/app/model/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup: FormGroup;
  invalidCredentials: boolean = false;
  serverError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    const request: LoginRequest = {
      email: this.formGroup.controls['email'].value,
      password: this.formGroup.controls['password'].value
    }
    this.authService.login(request).subscribe({
      next: (response: User) => this.loginWorks(response),
      error: (error: HttpErrorResponse) => this.loginError(error)
    })
  }

  private loginWorks(response: User) {
    console.log(response);
    this.invalidCredentials = false;
    this.serverError = false;
    this.cookieService.set('token', response.token);
    this.router.navigateByUrl('/home');
  }

  private loginError(error: HttpErrorResponse) {
    console.error(error);
    if (error.status === 403 || error.status === 404) {
      this.invalidCredentials = true;
    } else {
      this.serverError = true;
    }
  }

}
