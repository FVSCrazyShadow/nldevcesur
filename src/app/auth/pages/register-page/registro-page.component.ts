import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeadComponent } from '../../../head/head.component';
import { FootComponent } from '../../../footer/foot/foot.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registro-page-component',
  templateUrl: 'registro-page.component.html',
  standalone: true,
  imports: [FormsModule, HeadComponent, FootComponent, CommonModule]
})

export class RegistroPageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { }

  usuario = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Usuario registrado:', this.usuario);
    this.auth.register(this.usuario)
      .then(response => {
        console.log(response);
        this.router.navigate(['login']);
      })
      .catch(error => console.log(error))
  }
}

