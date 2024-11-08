import { Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-estudiante',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './inicio-estudiante.component.html',
  styleUrl: './inicio-estudiante.component.css'
})
export class InicioEstudianteComponent implements OnInit {
  lessons = [
    { nombre: '1er semestre', estado: 'Iniciar' },
    { nombre: '2do semestre', estado: 'Iniciar' },
    { nombre: '3er semestre', estado: 'Iniciar' },
    { nombre: '4to semestre', estado: 'Iniciar' },
    { nombre: '5to semestre', estado: 'Iniciar' },
    { nombre: '6to semestre', estado: 'Iniciar' },
    { nombre: '7mo semestre', estado: 'Iniciar' },
    { nombre: '8vo semestre', estado: 'Iniciar' }
  ];

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
}
