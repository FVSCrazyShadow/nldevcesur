import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import Proyecto from '../interfaces/proyecto.interface';
import Tarea from '../interfaces/tarea.interface';
import { addDoc, arrayUnion, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
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
      tareas: arrayUnion({tarea})
    })
  }

}
