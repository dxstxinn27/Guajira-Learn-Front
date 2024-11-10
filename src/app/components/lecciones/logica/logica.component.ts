import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logica.component.html',
  styleUrl: './logica.component.css'
})
export class LogicaComponent implements OnInit {
  constructor(private router: Router) {}
  correctAnswers = ['D', 'A', 'C', 'D', 'A', 'B', 'C', 'B', 'A', 'D']; //ESTAS SON LAS RESPUESTAS CORRECTAS DE LAS PREGUNTAS
  userAnswers: string[] = new Array(this.correctAnswers.length).fill('');
  score: number = -1;
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

  submitForm() {
    this.score = this.userAnswers.reduce((acc, answer, index) => {
      return acc + (answer === this.correctAnswers[index] ? 1 : 0);
    }, 0);

    console.log("Puntuación obtenida:", this.score);
    this.cactusCoins = this.score;
    window.alert("Respuestas enviadas correctamente.");
    
    //this.router.navigate(['/semestres/semestre2']);
    
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
