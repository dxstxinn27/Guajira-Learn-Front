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

@Component({
  selector: 'app-iniciar-sesion-estudiante',
  standalone: true,
  imports: [DividerModule, ButtonModule, InputTextModule, RouterModule, PasswordModule, FormsModule, FloatLabelModule],
  templateUrl: './iniciar-sesion-estudiante.component.html',
  styleUrl: './iniciar-sesion-estudiante.component.css'
})
export class IniciarSesionEstudianteComponent {
  correo: string = '';
  password: string = '';

  constructor(private estudianteService: EstudianteService, private router: Router) {}

  login() {
    this.estudianteService.login(this.correo, this.password).subscribe(
      response => {
        // Si la respuesta es exitosa, deberías tener el mensaje "Autenticado correctamente"
        console.log('Respuesta del servidor:', response);

        if (response.message === "Autenticado correctamente") {
          // Si la autenticación fue exitosa, redirige al estudiante a la página de inicio
          this.router.navigate(['/usuarios/estudiante/inicio']);
        } else {
          // Si la respuesta no es la esperada, muestra un mensaje
          alert("Error en la autenticación.");
        }
      },
      error => {
        // Si hubo un error en la autenticación (código 401, 404, etc.), muestra el error
        console.error("Error de autenticación:", error);
        alert("Correo o contraseña incorrectos");
      }
    );
  }
}