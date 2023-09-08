import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, RouterLink]
})
export class RegisterComponent {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(this.minNameLength)]],
        apellido: ['', [Validators.required, Validators.minLength(this.minLastNameLength)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(this.minPasswordLength)]],
        confirmPassword: ['', []],
      },
      {
        validators: (control: AbstractControl): ValidationErrors | null => {
          const password = control.get('password')?.value;
          const confirmPassword = control.get('confirmPassword')?.value;
          return password === confirmPassword ? null : { notSame: true };
        }
      }
    );
  }

  formGroup: FormGroup;
  minNameLength: number = 3;
  minLastNameLength: number = 3;
  minPasswordLength: number = 8;
  serverError: boolean = false;

  onSubmit() {

    if (this.formGroup.invalid) {
      return;
    }

    const request = {
      name: this.formGroup.controls['nombre'].value,
      lastName: this.formGroup.controls['apellido'].value,
      email: this.formGroup.controls['email'].value,
      password: this.formGroup.controls['password'].value
    };

    this.authService.register(request).subscribe({
      next: respuesta => {
        console.log(respuesta);
        this.serverError = false;
        // Si hay que redirigir al usuario a alguna página:
        // this.router.navigateByUrl('/home');
      },
      error: err => {
        console.error(err.error.msg);
        this.serverError = true;
      }
    });
  }

}
