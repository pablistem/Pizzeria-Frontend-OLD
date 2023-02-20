import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importo módulos de Angular Forms
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registroForm: FormGroup; // Defino una variable para el formulario

  constructor(private formBuilder: FormBuilder, // Inyecto FormBuilder en el constructor
    private authService: AuthService) {

    // Inicializo la propiedad 'registroForm' en el constructor utilizando el método this.fb.group()
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

    // Utilizo FormBuilder para crear un nuevo FormGroup con los campos que necesitamos.
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  /**
   * Envia los datos del formulario al servidor
   */
  onSubmit() {
    console.log(this.registroForm.value);

    // Compruebo si el formulario es válido. Si no lo es, se detiene la ejecución del método.
    if (this.registroForm.invalid) {
      return;
    }

    // Obtengo los valores de email y password del formulario
    const email = this.registroForm.controls['email'].value;
    const password = this.registroForm.controls['password'].value;

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
