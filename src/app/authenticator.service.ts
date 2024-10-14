import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
   constructor(private router: Router) {}

   canActivate (){
    this.router.navigate(['login'])

    return false;

   }


}
