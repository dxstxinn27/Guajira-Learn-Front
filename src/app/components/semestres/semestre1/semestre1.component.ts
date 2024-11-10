import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semestre1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semestre1.component.html',
  styleUrl: './semestre1.component.css'
})
export class Semestre1Component implements OnInit {
  lessons = [
    { nombre: 'Cálculo Diferencial', estado: 'Iniciar', ruta: 'lecciones/calculo1' },
    { nombre: 'Lógica y Teoría', estado: 'Iniciar', ruta: 'lecciones/logica' },
    { nombre: 'Introducción a la Ing. de Sistemas', estado: 'Iniciar', ruta: 'lecciones/introduccion' },
    { nombre: 'Algoritmo y Programación I', estado: 'Iniciar', ruta: 'lecciones/algoritmo1' },
    { nombre: 'Competencia Comunicativa I', estado: 'Iniciar', ruta: 'lecciones/competencia1' },
    { nombre: 'Cátedra Uniguajira', estado: 'Iniciar', ruta: 'lecciones/catedra' },
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
