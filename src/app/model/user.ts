/**
 * Esta interfaz contiene cuatro propiedades: id, email y password. Cada una de estas propiedades es de tipo string.
 */
export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
}

/**
 * Esta interfaz define un tipo de objeto llamado RegisterRequest, que extiende la interfaz User pero omite la propiedad id.
 */
export interface RegisterRequest extends Omit<User, "id" | "token"> { }

/**
 * Esta interfaz define un tipo de objeto llamado LoginRequest, que extiende la interfaz User pero omite las propiedades id, name y lastName.
 */
export interface LoginRequest extends Omit<User, "id" | "name" | "lastName" | "token"> { }
