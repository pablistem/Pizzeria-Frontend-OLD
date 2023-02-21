import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {

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
   * Envia los datos del formulario al servidor
   */
  onSubmit() {
    console.log(this.formGroup.value);

    // Compruebo si el formulario es válido. Si no lo es, se detiene la ejecución del método.
    if (this.formGroup.invalid) {
      return;
    }

    // Obtengo los valores de email y password del formulario
    const email = this.formGroup.controls['email'].value;
    const password = this.formGroup.controls['password'].value;

    // LLamo a AuthService para registrar al usuario.
    this.authService.register({
      email: email,
      password: password
    })
      // Uso el método .subscribe() para obtener la respuesta de servidor.
      .subscribe(respuesta => {
        console.log(respuesta);
      })

  }

}
