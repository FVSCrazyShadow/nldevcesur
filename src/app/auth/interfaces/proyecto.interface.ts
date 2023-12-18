import { isEmpty } from "rxjs";
import Tarea from "./tarea.interface";

export default interface Proyecto {
  id: string;
  nombre: string;
  tareas?: Tarea[];
  descripcion: string;
}
