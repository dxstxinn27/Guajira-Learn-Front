import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DocenteService } from '../../../../services/usuarios/docente.service';
import { HeaderComponent } from '../../../layout/header/header.component';
import { FooterComponent } from '../../../layout/footer/footer.component';

@Component({
  selector: 'app-iniciar-sesion-docente',
  standalone: true,
  imports: [DividerModule, ButtonModule, InputTextModule, RouterModule, PasswordModule, FormsModule, FloatLabelModule, HeaderComponent, FooterComponent],
  templateUrl: './iniciar-sesion-docente.component.html',
  styleUrl: './iniciar-sesion-docente.component.css'
})
export class IniciarSesionDocenteComponent {
  correo: string = '';
  password: string = '';

  constructor(private docenteService: DocenteService, private router: Router) {}

  login() {
    this.docenteService.login(this.correo, this.password).subscribe(
      response => {
        // Si la respuesta es exitosa, deberías tener el mensaje "Autenticado correctamente"
        console.log('Respuesta del servidor:', response);

        if (response.message === "Autenticado correctamente") {
          // Si la autenticación fue exitosa, redirige al estudiante a la página de inicio
          this.router.navigate(['/usuarios/docente/inicio']);
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
