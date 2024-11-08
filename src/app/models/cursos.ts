// Asignatura.ts
export interface AsignaturaI {
    id?: number;
    nombre: string;
    descripcion: string;
    creditos: number; // Valor entre 1 y 4 en lógica de negocio
    codigo: number;
  }
  
  // Tema.ts
  export interface TemaI {
    id?: number;
    titulo: string;
    descripcion: string;
    asignatura: AsignaturaI; // Relación con una asignatura
  }
  