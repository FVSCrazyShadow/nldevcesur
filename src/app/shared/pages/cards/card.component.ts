// card.component.ts

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [RouterLink]
})
export class CardComponent {
  @Input() app: any; // Asegúrate de ajustar el tipo de dato según tu estructura de aplicación
}

