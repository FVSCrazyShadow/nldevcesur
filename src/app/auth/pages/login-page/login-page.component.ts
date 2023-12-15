import { Component } from "@angular/core";
import { HeadComponent } from "../../../head/head.component";
import { FootComponent } from "../../../footer/foot/foot.component";
import { FormsModule, NgModel } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'login-page.component.html',
  standalone: true,
  imports: [HeadComponent,FootComponent,FormsModule],
  styles: ''
})

export class LoginPageComponent{
  username: string = '';
  password: string = '';

  constructor(private router: Router){

  }

  login() {
    // llamar a servicio protegido, TODO: CAMBIAR REDIRECT SIN BACKEND

    if(this.username === 'admin' && this.password ==='admin'){
      this.router.navigate(['dashboard']);
    }//TODO: BORRAR ESTO, SOLO PARA TEST

    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}
