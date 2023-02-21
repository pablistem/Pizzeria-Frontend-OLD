import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    console.log(this.formGroup.value);

    // Compruebo si el formulario es válido. Si no lo es, se detiene la ejecución del método.
    if (this.formGroup.invalid) {
      return;
    }

    // Obtengo los valores de los inputs del formulario
    const name = this.formGroup.controls['nombre'].value;
    const lastName = this.formGroup.controls['apellido'].value;
    const email = this.formGroup.controls['email'].value;
    const password = this.formGroup.controls['password'].value;

    // LLamo a AuthService para registrar y loguear al usuario.
    this.authService.register({
      name: name,
      lastName: lastName,
      email: email,
      password: password
    }).pipe(
      // Utilizo switchMap de rxjs para evitar el callback hell al anidar requests
      switchMap(() =>
        // Logueo al usuario recién registrado
        this.authService.login({ email: email, password: password })
      ))
      .subscribe({
        next: (userData) => {
          console.log(userData);
          this.serverError = false;
          // Redirige al usuario al Home
          this.router.navigateByUrl('/home');
        },
        // Error en el servidor backend
        error: (errorMsg) => {
          console.error(errorMsg);
          this.serverError = true;
        }
      })
  }

}
