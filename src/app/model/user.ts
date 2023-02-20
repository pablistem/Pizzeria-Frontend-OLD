/**
 * Esta interfaz contiene cuatro propiedades: id, email y password. Cada una de estas propiedades es de tipo string.
 */
export interface User {
  id: string;
  email: string;
  password: string;
}

/**
 * Esta interfaz define un tipo de objeto llamado RegisterRequest, que extiende la interfaz User pero omite la propiedad id.
 */
export interface RegisterRequest extends Omit<User, "id"> { }
