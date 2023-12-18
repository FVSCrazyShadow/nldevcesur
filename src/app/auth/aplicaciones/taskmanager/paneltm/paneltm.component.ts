import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import Proyecto from '../../../interfaces/proyecto.interface';
import Tarea from '../../../interfaces/tarea.interface';
import Usuario from '../../../interfaces/usuario.interface';
import { FormsModule, NgModel } from '@angular/forms';
import { LogoutBtnComponent } from '../../../../logout/logoutbtn.component';
import { TaskManagerService } from '../../../services/taskmanager.service';

@Component({
  selector: 'app-taskmanager-paneltm',
  templateUrl: 'paneltm.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, LogoutBtnComponent]
})

export class TaskManagerPanelTM implements OnInit {
  constructor(private auth: AuthService, private taskmgService: TaskManagerService) { }

  proyectos: Proyecto[] = [];

  ngOnInit() {

    this.taskmgService.getProject().subscribe(proyectos => {
      this.proyectos = proyectos;
    })
  }

  nombreUsuario: string = '';
  mostrarForm: boolean = false;
  mostrarFormTarea: boolean = false;
  mostrarFormUsuario: boolean = false;
  nombreProyecto: string = '';
  nombreTarea: string = '';
  descripcionProyecto: string = '';
  descripcionTarea: string = '';
  proyectoSeleccionado: Proyecto = { nombre: '', descripcion: '' };
  tareaSeleccionada: Tarea = { nombre: '', proyecto: this.proyectoSeleccionado, descripcion: '', usuarios: []}
  usuarioSeleccionado: string = '';


  //PROYECTO
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

    //test
    /* this.proyectos.push(nuevoProyecto); */
    console.log(this.proyectos)

    //BD Fire

    this.taskmgService.addProject(nuevoProyecto)

    // Reinicia el formulario y oculta el formulario después de crear el proyecto

    this.mostrarForm = false;
  }

  //TAREA
  mostrarFormularioTarea() {
    this.mostrarFormTarea = true;
  }

  crearTarea() {
    // Lógica para crear la tarea
    const proyecto = this.proyectos.find(p => p.nombre === this.proyectoSeleccionado.nombre);
    console.log(`Se ha creado la tarea ${this.nombreTarea} en el proyecto ${proyecto?.nombre}`)

    if (proyecto && proyecto != undefined) {
      let nuevaTarea: Tarea = {
        nombre: this.nombreTarea,
        proyecto: proyecto,
        descripcion: this.descripcionTarea,
        usuarios: []
      }
      // Agrega la tarea al array de tareas del proyecto
      proyecto.tareas?.push(nuevaTarea);

      this.taskmgService.addTarea(proyecto,nuevaTarea)

      // Reinicia el formulario y oculta el formulario después de crear la tarea
      this.nombreTarea = '';
        this.descripcionTarea = '';
        this.mostrarFormTarea = false;
    }
  }

  //USUARIOS

  mostrarFormularioUsuario() {
    this.mostrarFormUsuario = true;
  }

  annadirUsuario() {
    const proyecto = this.proyectos.find(p => p.nombre === this.proyectoSeleccionado.nombre);
    const tarea = proyecto?.tareas?.find(t => t.nombre === this.tareaSeleccionada.nombre);

    console.log(proyecto)
    console.log(tarea)
    console.log(`Se va a añadir el usuario a la tarea: ${tarea?.nombre}`);

    if (tarea && tarea != undefined) {
      tarea.usuarios.push(this.nombreUsuario);

      // Reinicia el formulario y oculta el formulario después de añadir el usuario
      this.nombreUsuario = ''
      this.mostrarFormUsuario = false;
      console.log(proyecto)
      console.log(this.tareaSeleccionada)
    }

  }

  //EVENTOS

  cancelarFormProyecto() {
    this.mostrarForm = false;
  }

  cancelarFormTarea() {
    this.mostrarFormTarea = false;
  }

  cancelarFormUsuario(){
    this.mostrarFormUsuario = false;
  }

  onProyectoClick(proyecto: Proyecto) {
    this.proyectoSeleccionado = proyecto;
    this.mostrarFormTarea = false;
  }

  onTareaClick(tarea: Tarea) {
    console.log('Item clicked:', tarea);
    this.tareaSeleccionada = tarea;
  }

  onUsuarioClick(usuario: string) {
    console.log(usuario)
    this.usuarioSeleccionado = usuario;
  }

  //borrar
  async borrarProyecto(pr: Proyecto){
    await this.taskmgService.deleteProject(pr)
  }

  borrarTarea(){

  }

  borrarUsuario(){

  }
}
