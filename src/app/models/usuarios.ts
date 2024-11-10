import { AsignaturaI } from "./cursos";

// HorarioDisponibilidad.ts
export interface HorarioDisponibilidadI {
    id?: number;
    dia: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';
    hora_inicio: string; // Representada como 'HH:MM' para un formato de hora estándar
    hora_fin: string; // Representada como 'HH:MM'
}

// Estudiante.ts
export interface EstudianteI {
    id?: number;
    estudiante: EstudianteI;
    nombre: string;
    apellido: string;
    tipo_id: 'CÉDULA DE CIUDADANÍA' | 'TARJETA DE IDENTIDAD';
    numero_id: number;
    carrera: 'INGENIERÍA DE SISTEMAS';
    semestre: number; // Validar entre 1 y 10 en lógica de negocio
    correo: string;
    contraseña: string;
    cactusCoins: number;
}

// Docente.ts
export interface DocenteI {
    id?: number;
    nombre: string;
    apellido: string;
    numero_id: number;
    asignatura: AsignaturaI[]; // Relación con varias asignaturas
    correo: string;
    contraseña: string;
}

// Tutor.ts
export interface TutorI extends EstudianteI {
    id?: number;
    asignatura: AsignaturaI; // Relación con una sola asignatura
    horario_disponibilidad: HorarioDisponibilidadI[]; // Múltiples horarios de disponibilidad
}
