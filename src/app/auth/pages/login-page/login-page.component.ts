import { Component, inject } from "@angular/core";
import { HeadComponent } from "../../../head/head.component";
import { FootComponent } from "../../../footer/foot/foot.component";
import { FormsModule, NgModel } from "@angular/forms";
import { Router } from "@angular/router";
import { Auth, GoogleAuthProvider, signInWithPopup } from "@angular/fire/auth";
import { getAuth } from "firebase/auth";
import { AuthService } from "../../services/auth.service";

@Component({
  templateUrl: 'login-page.component.html',
  standalone: true,
  imports: [HeadComponent, FootComponent, FormsModule],
  styles: ''
})

export class LoginPageComponent {

  /* private auth: Auth = inject(Auth); SERVICIO DE GOOGLE NO EL AUTH NUESTRO*/
  private googleService: GoogleAuthProvider = new GoogleAuthProvider();

  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {

  }

  login() {
    let usuario = {
      email : this.email,
      password : this.password
    }

    console.log(usuario);

    this.auth.login(usuario)
    .then(response => {
      console.log(response)
      this.router.navigate(['dashboard'])
    })
    .catch(error => console.log(error))
  }

  registrarUsuario(){
    this.router.navigate(['registro']);
  }

  loginWithGoogle() {
    /* signInWithPopup(this.auth, this.googleService)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(`TEST DENTRO LOGINWITHGOOGLE ${result}`);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      }); */
  }
}
