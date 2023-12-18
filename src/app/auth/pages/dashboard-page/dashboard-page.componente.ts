import { Component, OnInit } from '@angular/core';
import { HeadComponent } from '../../../head/head.component';
import { FootComponent } from '../../../footer/foot/foot.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LogoutBtnComponent } from '../../../logout/logoutbtn.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: 'dashboard-page.component.html',
  standalone: true,
  imports: [HeadComponent, FootComponent, CommonModule, LogoutBtnComponent]
})

export class DashboardPageComponent implements OnInit {
  opciones = [
    {
      titulo: 'Task Manager',
      descripcion: 'Gestor de tareas simple',
      ruta: 'taskManager',
      disable: false,
    },
    {
      titulo: 'Opción 2',
      descripcion: 'Pronto disponible',
      ruta: 'dashboard',
      disable: true,
    },
    {
      titulo: 'Opción 3',
      descripcion: 'Pronto disponible',
      ruta: 'dashboard',
      disable: true,
    },
    {
      titulo: 'Opción 4',
      descripcion: 'Pronto disponible',
      ruta: 'dashboard',
      disable: true,
    }
  ];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
}
