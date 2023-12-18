import Proyecto from "./proyecto.interface";
import Usuario from "./usuario.interface";

export default interface Tarea {
  id: string;
  idProyecto: string;
  nombre: string;
  descripcion: string;
  usuarios?: Usuario[];
}
