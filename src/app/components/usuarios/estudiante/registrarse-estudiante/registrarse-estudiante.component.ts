import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteService } from '../../../../services/usuarios/estudiante.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { EstudianteI } from '../../../../models/usuarios';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { HeaderComponent } from '../../../layout/header/header.component';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-registrarse-estudiante',
  standalone: true,
  imports: [CommonModule, PasswordModule, MessagesModule, DropdownModule, ReactiveFormsModule, FloatLabelModule, ToastModule, CardModule, ButtonModule, PasswordModule, FooterComponent, HeaderComponent, DividerModule, InputTextModule],
  templateUrl: './registrarse-estudiante.component.html',
  styleUrl: './registrarse-estudiante.component.css'
})
export class RegistrarseEstudianteComponent implements OnInit {
  tipoIdOptions = [
    { label: 'Cédula de Ciudadanía', value: 'CÉDULA DE CIUDADANÍA' },
    { label: 'Tarjeta de Identidad', value: 'TARJETA DE IDENTIDAD' }
  ];

  carreraOptions = [
    { label: 'Ingeniería de Sistemas', value: 'INGENIERÍA DE SISTEMAS' }
  ];

  public form: FormGroup;
  messages: Message[] = [];
  estudianteService = inject(EstudianteService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      tipo_id: ['', [Validators.required]],
      numero_id: ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      semestre: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      correo: ['', [Validators.required, Validators.email, this.uniguajiraEmailValidator]],
      contraseña: ['', [Validators.required]],
      cactusCoins: [''],
    });
  }

  ngOnInit(): void {

  }

  uniguajiraEmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email && !email.endsWith('@uniguajira.edu.co')) {
      return { uniguajiraEmail: true };
    }
    return null;
  }

  onSubmit(): void {
    this.messages = []; // Limpiar mensajes anteriores
    console.log('Formulario válido:', this.form.valid);
    if (this.form.valid) {
      const formValue: EstudianteI = this.form.value;
      this.estudianteService.createEstudiante(formValue).subscribe(
        () => {
          // Mensaje de éxito si el formulario es válido y el registro es exitoso
          this.messages.push({ severity: 'success', detail: 'Estudiante registrado correctamente' });
          this.router.navigateByUrl('usuarios/estudiante/iniciar-sesion');
        },
        err => {
          console.error('Error al crear estudiante', err);
          // Mensaje de error si hay un fallo en la creación del estudiante
          this.messages.push({ severity: 'error', detail: 'Error al registrar el estudiante. Inténtelo de nuevo.' });
        }
      );
    } else {
      // Mensaje de error si el formulario no es válido
      this.messages.push({ severity: 'error', detail: 'Por favor, corrija los errores en el formulario antes de continuar.' });
      this.form.markAllAsTouched();
    }
  }

  cancel() {
    this.router.navigateByUrl('/usuarios/estudiante/iniciar-sesion');
  }

  get nombre() { return this.form.get('nombre'); }

  get apellido() { return this.form.get('apellido'); }

  get tipo_id() { return this.form.get('tipo_id'); }

  get numero_id() { return this.form.get('numero_id'); }

  get carrera() { return this.form.get('carrera'); }

  get semestre() { return this.form.get('semestre'); }

  get correo() { return this.form.get('correo'); }

  get contraseña() { return this.form.get('contraseña'); }

  get cactusCoins() { return this.form.get('cactusCoins'); }
}
