import { Injectable } from '@angular/core';
import { Firestore, collectionData, getDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import Proyecto from '../interfaces/proyecto.interface';
import Tarea from '../interfaces/tarea.interface';
import Usuario from '../interfaces/usuario.interface';
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskManagerService {
  constructor(private firestore: Firestore, private auth: AuthService) { }

  addProject(proyecto: Proyecto) {
    const refProyecto = collection(this.firestore, 'proyectos'); //referencia a la bd
    return addDoc(refProyecto, proyecto);
  }

  getProject(): Observable<Proyecto[]> {
    const refProyecto = collection(this.firestore, 'proyectos'); //referencia a la bd
    return collectionData(refProyecto, { idField: 'id' }) as Observable<Proyecto[]>
  }

  deleteProject(proyecto: Proyecto) {
    const refProyecto = doc(this.firestore, `proyectos/${proyecto.id}`);
    return deleteDoc(refProyecto);
  }

  async addTarea(proyecto: Proyecto, tarea: Tarea) {
    const refProyecto = doc(this.firestore, `proyectos/${proyecto.id}`);
    await updateDoc(refProyecto, {
      tareas: arrayUnion(tarea)
    })
  }

  async deleteTarea(proyecto: Proyecto, tarea: Tarea) {
    const refProyecto = doc(this.firestore, `proyectos/${proyecto.id}`);
    await updateDoc(refProyecto, {
      tareas: arrayRemove(tarea)
    })
  }

  async addUsuario(proyecto: Proyecto, tarea: Tarea, usuario: Usuario) {
    const refProyecto = doc(this.firestore, `proyectos/${proyecto.id}`);
    const refTarea = doc(this.firestore, `proyectos/${proyecto.id}/tareas/${tarea.id}`);

    // Obtener la referencia a la tarea específica dentro del proyecto
    const tareaSnapshot = await getDoc(refTarea)

    if (tareaSnapshot.exists()) {
      // La tarea existe, actualizar la propiedad "usuarios" de la tarea
      await updateDoc(refTarea, {
        usuarios: arrayUnion(usuario)
      });
    } else {
      // Manejar el caso en el que la tarea no existe
      console.error('La tarea no existe.');
    }
  }

  async deleteUsuario(proyecto: Proyecto, tarea: Tarea, usuario: Usuario) {
    const refProyecto = doc(this.firestore, `proyectos/${proyecto.id}`);
    const refTarea = doc(this.firestore, `proyectos/${proyecto.id}/tareas/${tarea.id}`);

    // Obtener la referencia a la tarea específica dentro del proyecto
    const tareaSnapshot = await getDoc(refTarea)

    if (tareaSnapshot.exists()) {
      // La tarea existe, actualizar la propiedad "usuarios" de la tarea
      await updateDoc(refTarea, {
        usuarios: arrayRemove(usuario)
      });
    } else {
      // Manejar el caso en el que la tarea no existe
      console.error('La tarea no existe.');
    }

  }
}
