import { Component, inject } from "@angular/core";
import { HeadComponent } from "../../../head/head.component";
import { FootComponent } from "../../../footer/foot/foot.component";
import { FormsModule, NgModel } from "@angular/forms";
import { Router } from "@angular/router";
import { Auth } from "@angular/fire/auth";

@Component({
  templateUrl: 'login-page.component.html',
  standalone: true,
  imports: [HeadComponent,FootComponent,FormsModule],
  styles: ''
})

export class LoginPageComponent{

  private auth: Auth = inject(Auth);

  username: string = '';
  password: string = '';

  constructor(private router: Router){

  }

  login() {
    // llamar a servicio protegido, TODO: CAMBIAR REDIRECT SIN BACKEND

    console.log(this.auth);

    if(this.username === 'admin' && this.password ==='admin'){
      this.router.navigate(['dashboard']);
    }//TODO: BORRAR ESTO, SOLO PARA TEST

    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}
