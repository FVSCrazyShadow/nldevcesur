import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import Proyecto from '../../../interfaces/proyecto.interface';
import Tarea from '../../../interfaces/tarea.interface';
import Usuario from '../../../interfaces/usuario.interface';
import { FormsModule, NgModel } from '@angular/forms';
import { LogoutBtnComponent } from '../../../../logout/logoutbtn.component';
import { TaskManagerService } from '../../../services/taskmanager.service';
import { IndexModule } from '../../../../index/index.module';

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

  //formularioa variables
  nombreUsuario: string = '';
  mostrarForm: boolean = false;
  mostrarFormTarea: boolean = false;
  mostrarFormUsuario: boolean = false;
  nombreProyecto: string = '';
  nombreTarea: string = '';
  descripcionProyecto: string = '';
  descripcionTarea: string = '';

  //interfaces
  proyectoSeleccionado: Proyecto = { id: '', nombre: '', descripcion: '' }
  tareaSeleccionada: Tarea = { id: '', idProyecto: this.proyectoSeleccionado.nombre, nombre: '', descripcion: ''}
  usuarioSeleccionado: Usuario = { id: '', idtarea: '', nombre: '' }


  //PROYECTO
  mostrarFormulario() {
    this.mostrarForm = true;
  }

  crearProyecto() {
    // Lógica para crear el proyecto
    console.log(this.nombreProyecto, this.descripcionProyecto)

    let nuevoProyecto: Proyecto = {
      id: this.nombreProyecto,
      nombre: this.nombreProyecto,
      descripcion: this.descripcionProyecto
    }

    //test
    this.proyectos.push(nuevoProyecto);
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
    const proyecto = this.proyectos?.find(p => p.id === this.proyectoSeleccionado.id);
    console.log(`Se ha creado la tarea ${this.nombreTarea} en el proyecto ${proyecto?.nombre}`)

    if (proyecto && proyecto != undefined) {
      /* let nuevaTarea: Tarea = {
        id: this.nombreTarea,
        nombre: this.nombreTarea,
        idProyecto: proyecto.id,
        descripcion: this.descripcionTarea,
        usuarios: []
      } */
      // Agrega la tarea al array de tareas del proyecto
     /*  proyecto.tareas?.push({
        id: this.nombreTarea,
        nombre: this.nombreTarea,
        idProyecto: proyecto.id,
        descripcion: this.descripcionTarea,
        usuarios: []
      }); */

      this.taskmgService.addTarea(proyecto, {
        id: this.nombreTarea,
        nombre: this.nombreTarea,
        idProyecto: proyecto.id,
        descripcion: this.descripcionTarea,
        usuarios: []
      })

      this.actualizarProyectos();

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
    const proyecto = this.proyectos?.find(p => p.nombre === this.proyectoSeleccionado.nombre);
    const tarea = proyecto?.tareas?.find(t => t.nombre === this.tareaSeleccionada.nombre);

    console.log(proyecto)
    console.log(tarea)
    console.log(`Se va a añadir el usuario a la tarea: ${tarea?.nombre}`);

    let nuevoUsuario: Usuario = {
      id: this.nombreUsuario,
      idtarea: this.tareaSeleccionada.id,
      nombre: this.nombreUsuario
    }

    if (tarea && proyecto && tarea != undefined && proyecto != undefined) {

      /* tarea.usuarios?.push(nuevoUsuario) */

      this.taskmgService.addUsuario(proyecto,tarea,nuevoUsuario);

      this.actualizarProyectos();

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

  cancelarFormUsuario() {
    this.mostrarFormUsuario = false;
  }

  onProyectoClick(proyecto: Proyecto) {
    this.proyectoSeleccionado = proyecto;
    this.mostrarFormTarea = false;
    this.mostrarFormUsuario = false;
    console.log(proyecto)
  }

  onTareaClick(tarea: Tarea) {
    this.tareaSeleccionada = tarea;
    this.mostrarFormUsuario = false;
    console.log('Item clicked:', tarea);
  }

  onUsuarioClick(usuario: Usuario) {
    console.log(usuario)
    this.usuarioSeleccionado = usuario;
  }

  //borrar
  async borrarProyecto(pr: Proyecto) {
    await this.taskmgService.deleteProject(pr)
  }

  async borrarTarea(tarea: Tarea) {
    await this.taskmgService.deleteTarea(this.proyectoSeleccionado,tarea)
  }

  async borrarUsuario(usuario: Usuario) {
    await this.taskmgService.deleteUsuario(this.proyectoSeleccionado,this.tareaSeleccionada,usuario)
  }

  actualizarProyectos(){
    this.taskmgService.getProject().subscribe(proyectos => {
      this.proyectos = proyectos;
    })
  }
}
