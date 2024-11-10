import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router } from '@angular/router';
import { EstudianteService } from '../../../../services/usuarios/estudiante.service';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { HeaderComponent } from '../../../layout/header/header.component';

@Component({
  selector: 'app-iniciar-sesion-estudiante',
  standalone: true,
  imports: [DividerModule, ButtonModule, InputTextModule, RouterModule, PasswordModule, FormsModule, FloatLabelModule, FooterComponent, HeaderComponent],
  templateUrl: './iniciar-sesion-estudiante.component.html',
  styleUrl: './iniciar-sesion-estudiante.component.css'
})
export class IniciarSesionEstudianteComponent {
  correo: string = '';
  password: string = '';

  constructor(private estudianteService: EstudianteService, private router: Router) { }

  login() {
    this.estudianteService.login(this.correo, this.password).subscribe(
      response => {
        // Muestra el objeto completo de la respuesta para verificar su estructura
        console.log('Respuesta completa del servidor:', response);

        if (response.message && response.message.trim() === "Autenticado correctamente") {
          // Si la autenticación fue exitosa, redirige al estudiante a la página de inicio
          localStorage.setItem('token', response.token); // Guarda el token en localStorage
          this.router.navigate(['/usuarios/estudiante/inicio']);
        } else {
          // Si la respuesta no es la esperada, muestra un mensaje de error
          alert("Error en la autenticación.");
        }
      },
      error => {
        // Manejo de errores HTTP, como un error 401 o 404
        console.error("Error de autenticación:", error);
        alert("Correo o contraseña incorrectos");
      }
    );
  }
}