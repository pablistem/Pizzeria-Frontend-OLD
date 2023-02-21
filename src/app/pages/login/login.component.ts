import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formGroup: FormGroup;
  invalidCredentials: boolean = false;
  serverError: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

    // Creo el FormGroup que contendrá los FormControl.
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * Envia los datos del formulario al servidor
   */
  onSubmit() {
    console.log(this.formGroup.value);

    // Compruebo si el formulario es válido.
    if (this.formGroup.invalid) {
      return;
    }

    // Obtengo los valores de email y password del formulario
    const email = this.formGroup.controls['email'].value;
    const password = this.formGroup.controls['password'].value;

    // LLamo a AuthService para loguear al usuario.
    this.authService.login({
      email: email,
      password: password
    })
      // Uso el método .subscribe() para obtener la respuesta de servidor.
      .subscribe({
        // El usuario se autenticó correctamente
        next: (userData) => {
          console.log(userData);
          this.invalidCredentials = false;
          this.serverError = false;
          // Redirige al usuario al Home
          this.router.navigateByUrl('/home');
        },
        // Las credenciales son inválidas
        error: (errorMsg) => {
          console.error(errorMsg);
          if (errorMsg.status === 403 || errorMsg.status === 404) {
            this.invalidCredentials = true;
          } else {
            this.serverError = true;
          }
        }
      })

  }

}
