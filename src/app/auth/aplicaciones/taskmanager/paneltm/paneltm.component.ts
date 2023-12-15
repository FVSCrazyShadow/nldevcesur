import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager-paneltm',
  templateUrl: 'paneltm.component.html',
  standalone: true,
  imports: [CommonModule]
})

export class TaskManagerPanelTM implements OnInit {
  constructor() { }

  ngOnInit() { }

  proyectos: string[] = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3'];
  tareas: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  usuarios: string[] = ['Usuario 1', 'Usuario 2', 'Usuario 3'];

  onItemClick(item: string): void {
    console.log(`Elemento clicado: ${item}`);
  }
}
