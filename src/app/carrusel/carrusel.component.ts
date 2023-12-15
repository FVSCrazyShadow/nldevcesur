import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  standalone: true,
  imports: [CommonModule],
  styles: `
  /* head custom css */
  .carousel-item img {
    max-height: 750px; /* Establece la altura máxima de las imágenes */
    width: auto; /* Para mantener la proporción de la imagen */
    margin: auto; /* Centra la imagen horizontalmente */
  }
  `
})
export class CarruselComponent {
  public imagenes: string[] = [
    'C:/Users/Nardi/Documents/NLDev/appNLDev/src/assets/img/ejDes/ejemploImagen1.webp',
    'C:/Users/Nardi/Documents/NLDev/appNLDev/src/assets/img/ejDes/ejemploImagen1.webp',
    'C:/Users/Nardi/Documents/NLDev/appNLDev/src/assets/img/ejDes/ejemploImagen1.webp',
    // TODO: cargar desde firebase
  ];
}
