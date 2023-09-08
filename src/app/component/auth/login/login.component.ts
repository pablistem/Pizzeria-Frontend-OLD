import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule, NgIf]
})
export class LoginComponent {

  formGroup: FormGroup;
  invalidCredentials: boolean = false;
  serverError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
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
    const request = {
      email: this.formGroup.controls['email'].value,
      password: this.formGroup.controls['password'].value
    }
    this.authService.login(request).subscribe({
      next: respuesta => {
        console.log(respuesta);
        this.invalidCredentials = false;
        this.serverError = false;
        this.authService.guardarToken(respuesta.refreshToken)
        this.router.navigateByUrl('/home');
      },
      error: err => {
        console.error(err);
        if (err.status === 403 || err.status === 404) {
          this.invalidCredentials = true;
        } else {
          this.serverError = true;
        }
      }
    })
  }

}
