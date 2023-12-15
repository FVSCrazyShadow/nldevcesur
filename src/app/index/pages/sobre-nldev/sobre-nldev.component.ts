import { Component } from '@angular/core';
import { HeadComponent } from '../../../head/head.component';
import { FootComponent } from '../../../footer/foot/foot.component';

@Component({
  selector: 'app-sobre-nldev',
  standalone: true,
  imports: [HeadComponent,FootComponent],
  templateUrl: './sobre-nldev.component.html',
  styleUrl: './sobre-nldev.component.css'
})
export class SobreNLDevComponent {

}
