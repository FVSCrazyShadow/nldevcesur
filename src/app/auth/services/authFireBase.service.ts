import { Injectable } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { provideAuth } from '@angular/fire/auth';

@Injectable({providedIn: 'root'})

export class AuthFireBaseService {

  constructor() { }

  loginWithGoogle(){
  }

}
