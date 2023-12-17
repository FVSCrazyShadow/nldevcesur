import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import Proyecto from '../../../interfaces/proyecto.interface';
import Tarea from '../../../interfaces/tarea.interface';
import Usuario from '../../../interfaces/usuario.interface';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-taskmanager-paneltm',
  templateUrl: 'paneltm.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class TaskManagerPanelTM implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit() { }

  proyectos: Proyecto[] = [];
  usuarios: string[] = [];
  mostrarForm: boolean = false;
  mostrarFormTarea: boolean = false;
  nombreProyecto: string = '';
  nombreTarea: string = '';
  descripcionProyecto: string = '';
  descripcionTarea: string = '';
  proyectoSeleccionado: Proyecto = {nombre: '', descripcion: ''};

  mostrarFormulario() {
    this.mostrarForm = true;
  }

  crearProyecto() {
    // Lógica para crear el proyecto
    console.log(this.nombreProyecto, this.descripcionProyecto)

    let nuevoProyecto: Proyecto = {
      nombre: this.nombreProyecto,
      descripcion: this.descripcionProyecto,
      tareas: []
    }
    this.proyectos.push(nuevoProyecto);
    console.log(this.proyectos)

    // Reinicia el formulario y oculta el formulario después de crear el proyecto

    this.mostrarForm = false;
  }

  mostrarFormularioTarea() {
    this.mostrarFormTarea = true;
  }

  crearTarea() {
    // Lógica para crear la tarea
    const proyecto = this.proyectos.find(p => p.nombre === this.proyectoSeleccionado.nombre);
    console.log(`Se ha creado la tarea ${this.nombreTarea} en el proyecto ${proyecto}`)

    if (proyecto && proyecto != undefined) {
      let nuevaTarea: Tarea = {
        nombre: this.nombreTarea,
        proyecto: proyecto,
        descripcion: this.descripcionTarea
      }
      // Agrega la tarea al array de tareas del proyecto
      proyecto.tareas.push(nuevaTarea);

      // Reinicia el formulario y oculta el formulario después de crear la tarea
      this.nombreTarea = '',
      this.descripcionTarea = '',
      this.mostrarFormTarea = false;
    }
  }

  cancelarFormProyecto(){
    this.mostrarForm = false;
  }

  cancelarFormTarea(){
    this.mostrarFormTarea = false;
  }

  onProyectoClick(proyecto: Proyecto){
    this.proyectoSeleccionado = proyecto;
    this.mostrarFormTarea = false;
  }

  onTareaClick(tarea: Tarea) {
//todo:sgr
    console.log('Item clicked:', tarea);
  }

  onUsuarioClick(usuario: string){

  }

  logOut() {
    this.auth.logOut()
    .then(response => {
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
  }
}
