import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { RegisterRequest, User } from 'src/app/model/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formGroup: FormGroup;
  minNameLength: number = 3;
  minLastNameLength: number = 3;
  minPasswordLength: number = 8;
  serverError: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

    // Creo el FormGroup que contendrá los FormControl.
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(this.minNameLength)]],
      apellido: ['', [Validators.required, Validators.minLength(this.minLastNameLength)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minPasswordLength)]],
      confirmPassword: ['', []],
    },
      // Agrego una validación personalizada para verificar que las contraseñas coincidan.
      {
        validators: (control: AbstractControl): ValidationErrors | null => {
          const password = control.get('password')?.value;
          const confirmPassword = control.get('confirmPassword')?.value;
          return password === confirmPassword ? null : { notSame: true };
        }
      });
  }

  /**
   * Envia los datos del formulario al servidor para registrar al usuario.
   * Después de que el usuario se haya registrado, lo loguea.
   * Si el logue es exitoso, redirige al usuario a la página principal.
   */
  onSubmit() {
    // Compruebo si el formulario es válido. Si no lo es, se detiene la ejecución del método.
    if (this.formGroup.invalid) {
      return;
    }

    // Obtengo los valores de los inputs del formulario
    const request : RegisterRequest = {
      name: this.formGroup.controls['nombre'].value,
      lastName: this.formGroup.controls['apellido'].value,
      email: this.formGroup.controls['email'].value,
      password: this.formGroup.controls['password'].value
    };

    // Si hay que redirigir al usuario a alguna página:
    // this.router.navigateByUrl('/home');
    this.authService.register(request).subscribe({
      next: (response : User) => this.registerWorks(response),
      error: (error: HttpErrorResponse) => this.registerError(error)
    });
  }

  private registerWorks(response : User) {
    console.log(response);
    this.serverError = false;
  }

  private registerError(error : HttpErrorResponse){
    console.error(error.error.msg);
    this.serverError = true;
  }

}
