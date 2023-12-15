import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { environment } from './enviroment/enviroment.component';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    FormsModule,
  ]
})

export class AppModule{

}
