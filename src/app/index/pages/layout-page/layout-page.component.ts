import { Component } from '@angular/core';
import { ServicioComponent } from '../../../servicios/servicio/servicio.component';
import { HeadComponent } from '../../../head/head.component';
import { FootComponent } from '../../../footer/foot/foot.component';
import { CarruselComponent } from '../../../carrusel/carrusel.component';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [ServicioComponent,HeadComponent,FootComponent,CarruselComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

}
