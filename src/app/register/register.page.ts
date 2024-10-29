import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiControllerService } from '../services/api-controller.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    "rut": "21432232k",
    "nombre": "alo",
    "email": "alo",
    "password": "alo123"
  }

  constructor(private router: Router, private location: Location, private api:ApiControllerService) {}

  ola(){
    this.api.insertarUsuarios(this.user).subscribe(
      (respuesta) => {
        console.log("Registro exitoso JSON del usuario: ", this.user.nombre);

      },
      (error) => {
        console.log("ERROR en la llamada",error);
        return
      }
    )
  }
  
  goBack() {
    this.location.back();
  }
  
  ngOnInit() {
  }

  
  



}
