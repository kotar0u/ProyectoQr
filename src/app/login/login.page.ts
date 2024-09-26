import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  user = {
    "usuario": "",
    "contrasena": ""
  }
  mensaje = "";

  validar() {
    if (this.user.usuario.length != 0) {
      if (this.user.contrasena.length != 0) {
        this.mensaje = 'Inicio exitoso';
        let navigationExtras: NavigationExtras = {
          state: {
            usuario: this.user.usuario,
            pass: this.user.contrasena,
          },
        };
        setTimeout(() => {
          this.router.navigate(['/home'], navigationExtras);
          this.mensaje = "";
        }, 2000);
      } else {
        this.mensaje = "Contraseña vacia";
      }
    } else {
      this.mensaje = "Usuario vacio";
    }
  }

  ngOnInit() {
  }

  /* myForm = new FormGroup({
    myInput: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ])
  }); */

  /* onSubmit() {
    if (this.myForm.valid) {
      // El formulario es válido, puedes realizar la acción deseada (e.g., enviar datos)
      console.log('Formulario enviado correctamente');
    } else {
      // El formulario es inválido, mostrar un mensaje de error al usuario
      console.log('Por favor, completa el formulario correctamente.');
    }
  } */
}
