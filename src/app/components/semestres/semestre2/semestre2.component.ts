import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semestre2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semestre2.component.html',
  styleUrl: './semestre2.component.css'
})
export class Semestre2Component implements OnInit {
  lessons = [
    { nombre: 'Cálculo Integral', estado: 'Iniciar', ruta: 'lecciones/calculo2' },
    { nombre: 'Física Mecánica', estado: 'Iniciar', ruta: 'lecciones/fisica1' },
    { nombre: 'Álgebra Lineal', estado: 'Iniciar', ruta: 'lecciones/algebra' },
    { nombre: 'Algoritmo y Programación II', estado: 'Iniciar', ruta: 'lecciones/algoritmo2' },
    { nombre: 'Competencia Comunicativa II', estado: 'Iniciar', ruta: 'lecciones/competencia2' },
    { nombre: 'Humanidades', estado: 'Iniciar', ruta: 'lecciones/humanidades' },
  ];

  constructor(private router: Router) {}

  racha = 0;
  cactusCoins = 0.0;
  fechaActual = new Date();
  diasMes: number[] = [];
  isDarkMode = false;

  ngOnInit(): void {
    this.cargarEstadoDarkMode();
    this.generarCalendario();
  }

  cargarEstadoDarkMode(): void {
    const modoOscuroGuardado = localStorage.getItem('isDarkMode');
    this.isDarkMode = modoOscuroGuardado === 'true';
  }

  generarCalendario(): void {
    const fecha = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1, 0);
    const dias = fecha.getDate();
    this.diasMes = Array.from({ length: dias }, (_, i) => i + 1);
  }

  cerrarSesion(): void {
    // Limpiar el localStorage y redirigir al inicio de sesión
    localStorage.removeItem('estudianteId');
    localStorage.removeItem('token');
    // localStorage.removeItem('isDarkMode');
    this.router.navigate(['usuarios/estudiante/iniciar-sesion']);
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
  }

  navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }

}
