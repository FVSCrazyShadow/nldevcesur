import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { environment } from './enviroment/enviroment.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideDatabase } from '@angular/fire/database';
import { getDatabase } from 'firebase/database';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth())
  ]
})

export class AppModule{

}
