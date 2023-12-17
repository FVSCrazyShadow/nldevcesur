import Proyecto from "./proyecto.interface";
import Usuario from "./usuario.interface";

export default interface Tarea {
  id?: number;
  nombre: string;
  proyecto: Proyecto;
  usuarios?: Usuario[];
  descripcion: string;
}
