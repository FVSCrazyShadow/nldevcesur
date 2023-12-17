import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"nldv-aa1a9","appId":"1:753339618562:web:1338fae824facd21e69e1b","storageBucket":"nldv-aa1a9.appspot.com","apiKey":"AIzaSyDXF_RGPNSD_VakDKvnYXyApnneOP2FKyw","authDomain":"nldv-aa1a9.firebaseapp.com","messagingSenderId":"753339618562"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
