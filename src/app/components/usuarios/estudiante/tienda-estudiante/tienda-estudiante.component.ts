import { Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda-estudiante.component.html',
  styleUrl: './tienda-estudiante.component.css'
})
export class TiendaEstudianteComponent implements OnInit {
  
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
