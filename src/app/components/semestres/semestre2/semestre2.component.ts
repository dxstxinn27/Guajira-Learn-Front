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
    { nombre: 'Cálculo Integral', estado: 'Iniciar', ruta: '' },
    { nombre: 'Física Mecánica', estado: 'Iniciar', ruta: '' },
    { nombre: 'Álgebra Lineal', estado: 'Iniciar', ruta: '' },
    { nombre: 'Algoritmo y Programación II', estado: 'Iniciar', ruta: '' },
    { nombre: 'Competencia Comunicativa II', estado: 'Iniciar', ruta: '' },
    { nombre: 'Humanidades', estado: 'Iniciar', ruta: '' },
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
    console.log('Sesión cerrada');
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
  }

  navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }

}
