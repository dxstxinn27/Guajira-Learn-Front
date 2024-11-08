import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { DocenteService } from '../../../../services/usuarios/docente.service';
import { Router } from '@angular/router';
import { DocenteI } from '../../../../models/usuarios';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { HeaderComponent } from '../../../layout/header/header.component';


@Component({
  selector: 'app-registrarse-docente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule, FooterComponent, HeaderComponent],
  templateUrl: './registrarse-docente.component.html',
  styleUrl: './registrarse-docente.component.css'
})
export class RegistrarseDocenteComponent implements OnInit {
  public form: FormGroup;
  docenteService = inject(DocenteService);
  asignaturas: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  )
  { 
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],           
      apellido: ['', [Validators.required]],      
      numero_id: ['', [Validators.required]],    
      asignatura: ['', [Validators.required]],  
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]],
    });
  }
  
  ngOnInit(): void {
    this.obtenerAsignaturas();
  }

  obtenerAsignaturas(): void {
    this.http.get<any>('http://127.0.0.1:8000/cursos/asignatura/')
      .subscribe(
        response => {
          // Store both id and name
          this.asignaturas = response.asignaturas.map((asignatura: any) => ({
            id: asignatura.id,
            nombre: asignatura.nombre
          }));
        },
        err => console.error('Error al cargar asignaturas', err)
      );
  }
  
  
  onSubmit(): void {
    // Clone form value and convert `asignatura` to a number
    const formValue: DocenteI = {
      ...this.form.value,
      asignatura: +this.form.value.asignatura  // Convert `asignatura` to a number
    };

    console.log(formValue);
    this.docenteService.createDocente(formValue).subscribe(
      () => {
        console.log('Docente created successfully:', formValue);
        this.router.navigateByUrl('usuarios/docente/iniciar-sesion');
      },
      err => {
        console.error('Error creating Docente:', err);
        console.log('It was not created correctly.');
      }
    );
}


  cancel() {
    this.router.navigateByUrl('/usuarios/docente/iniciar-sesion');
  }

  get nombre() { return this.form.get('nombre'); }

  get apellido() { return this.form.get('apellido'); }
  
  get numero_id() { return this.form.get('numero_id'); }
  
  get asignatura() { return this.form.get('carrera'); }
  
  get correo() { return this.form.get('correo'); }

  get contraseña() { return this.form.get('contraseña'); }

}
