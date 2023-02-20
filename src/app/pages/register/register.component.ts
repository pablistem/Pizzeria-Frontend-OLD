import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registroForm: FormGroup; // Define una variable para el formulario

  constructor(private formBuilder: FormBuilder) { // Inyectamos FormBuilder en el constructor

    // Inicializamos la propiedad 'registroForm' en el constructor utilizando el método this.fb.group()
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

    // Utilizamos FormBuilder para crear un nuevo FormGroup con los campos que necesitamos.
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
  }


}
