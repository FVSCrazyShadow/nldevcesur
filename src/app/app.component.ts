import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ServicioComponent } from './servicios/servicio/servicio.component';
import { FootComponent } from './footer/foot/foot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadComponent,CarruselComponent,ServicioComponent,FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appNLDev';
}
