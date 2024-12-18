import { Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-estudiante',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './inicio-estudiante.component.html',
  styleUrl: './inicio-estudiante.component.css'
})
export class InicioEstudianteComponent implements OnInit {
  lessons = [
    { nombre: '1er semestre', estado: 'Ir', ruta: 'semestres/semestre1' },
    { nombre: '2do semestre', estado: 'Ir', ruta: 'semestres/semestre2' },
  ];

  constructor(private router: Router) { }

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
