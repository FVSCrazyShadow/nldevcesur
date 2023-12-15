import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"nldev-593d5","appId":"1:863324344476:web:2499aa16605ed4bb56dd59","databaseURL":"https://nldev-593d5-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"nldev-593d5.appspot.com","apiKey":"AIzaSyBbhw7-kEzoc0DqBtC2RyuoH_d7qXiY9Ys","authDomain":"nldev-593d5.firebaseapp.com","messagingSenderId":"863324344476","measurementId":"G-JZ50XNPKRX"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
