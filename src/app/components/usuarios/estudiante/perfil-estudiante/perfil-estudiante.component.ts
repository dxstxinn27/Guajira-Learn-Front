import { Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EstudianteService } from '../../../../services/usuarios/estudiante.service';
import { EstudianteI } from '../../../../models/usuarios';

@Component({
  selector: 'app-perfil-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-estudiante.component.html',
  styleUrl: './perfil-estudiante.component.css'
})
export class PerfilEstudianteComponent implements OnInit {
  estudiante: EstudianteI | null = null;
  constructor(private router: Router, private estudianteService: EstudianteService) {}
  
  racha = 0;
  cactusCoins = 0.0;
  fechaActual = new Date();
  diasMes: number[] = [];
  isDarkMode = false;

  ngOnInit(): void {
    const estudianteId = localStorage.getItem('estudianteId');
    console.log('ID del estudiante obtenido:', estudianteId);
    if (estudianteId) {
      this.estudianteService.getOneEstudiante(+estudianteId).subscribe({
        next: (data) => {
          console.log('Datos del estudiante:', data);  // Verifica qué datos estás recibiendo
          this.estudiante = data.estudiante;  // Accede a la propiedad "estudiante"
        },
        error: (error) => {
          console.error('Error al obtener los datos del estudiante:', error);
        }
      });
    }

    this.cargarEstadoDarkMode();
    this.generarCalendario();
  }

  editarPerfil(): void {
    // Add functionality to edit the profile
    console.log('Edit profile');
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
