import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteService } from '../../../../services/usuarios/estudiante.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { EstudianteI } from '../../../../models/usuarios';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-registrarse-estudiante',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './registrarse-estudiante.component.html',
  styleUrl: './registrarse-estudiante.component.css'
})
export class RegistrarseEstudianteComponent implements OnInit{
  public form: FormGroup;
  estudianteService = inject(EstudianteService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) 
  { 
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],           
      apellido: ['', [Validators.required]],      
      tipo_id: ['', [Validators.required]],      
      numero_id: ['', [Validators.required]],    
      carrera: ['', [Validators.required]],  
      semestre: ['', [Validators.required, Validators.min(1), Validators.max(10)]],  
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: EstudianteI = this.form.value;
    console.log(formValue);
    this.estudianteService.createEstudiante(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');

    //     setTimeout(()=>{                  
    //       this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Cliente Creado', life:5000});

    //  }, 0);
    console.log(formValue)
        this.router.navigateByUrl('usuarios/estudiante/iniciar-sesion');

      },
      err => {

        console.log(err);
        console.log('It was not created correctly.');
      }
    );
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
}
