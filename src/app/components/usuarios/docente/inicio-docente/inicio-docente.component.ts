import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DocenteI } from '../../../../models/usuarios';
import { DocenteService } from '../../../../services/usuarios/docente.service';

@Component({
  selector: 'app-inicio-docente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-docente.component.html',
  styleUrl: './inicio-docente.component.css'
})
export class InicioDocenteComponent implements OnInit {
  docente: DocenteI | null = null;
  constructor(private router: Router, private docenteService: DocenteService) {}
  fechaActual = new Date();
  diasMes: number[] = [];
  isDarkMode = false;

  ngOnInit(): void {
    const docenteId = localStorage.getItem('docenteId');
    console.log('ID del docente obtenido:', docenteId);
    if (docenteId) {
      this.docenteService.getOneDocente(+docenteId).subscribe({
        next: (data) => {
          console.log('Datos del docente:', data);  // Verifica qué datos estás recibiendo
          this.docente = data.docente;  // Accede a la propiedad "estudiante"
        },
        error: (error) => {
          console.error('Error al obtener los datos del estudiante:', error);
        }
      });
    }

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
    this.router.navigate(['usuarios/docente/iniciar-sesion']);
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
