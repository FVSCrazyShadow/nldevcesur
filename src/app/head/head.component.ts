import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-head',
  templateUrl: 'head.component.html',
  standalone: true,
})

export class HeadComponent {

  constructor(private router: Router){

  }

  public goToLogin(){
    console.log('clic login btn')
    this.router.navigate(['login']);
  }

}
