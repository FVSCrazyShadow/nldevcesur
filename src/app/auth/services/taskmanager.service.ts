import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import Proyecto from '../interfaces/proyecto.interface';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({providedIn: 'root'})
export class TaskManagerService {
  constructor(private firestore: Firestore, private auth: AuthService) { }

  addProject(proyecto: Proyecto){
    const refProyecto = collection(this.firestore, 'proyectos'); //referencia a la bd
    return addDoc(refProyecto, proyecto);
  }
}
