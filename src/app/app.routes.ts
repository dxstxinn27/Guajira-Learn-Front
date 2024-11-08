import { Routes } from '@angular/router';
import { ContentComponent } from './components/layout/content/content.component';
import { IniciarSesionEstudianteComponent } from './components/usuarios/estudiante/iniciar-sesion-estudiante/iniciar-sesion-estudiante.component';
import { RegistrarseEstudianteComponent } from './components/usuarios/estudiante/registrarse-estudiante/registrarse-estudiante.component';
import { IniciarSesionDocenteComponent } from './components/usuarios/docente/iniciar-sesion-docente/iniciar-sesion-docente.component';
import { RegistrarseDocenteComponent } from './components/usuarios/docente/registrarse-docente/registrarse-docente.component';
import { CrearAsignaturaComponent } from './components/cursos/asignatura/crear-asignatura/crear-asignatura.component';
import { CrearTemaComponent } from './components/cursos/tema/crear-tema/crear-tema.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { InicioEstudianteComponent } from './components/usuarios/estudiante/inicio-estudiante/inicio-estudiante.component';
import { InicioDocenteComponent } from './components/usuarios/docente/inicio-docente/inicio-docente.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },

    { path: 'content', component: ContentComponent },
    // { path: 'footer', component: FooterComponent },


    // ESTUDIANTE
    { path: "usuarios/estudiante/iniciar-sesion", component: IniciarSesionEstudianteComponent },
    { path: "usuarios/estudiante/registrarse", component: RegistrarseEstudianteComponent },
    { path: "usuarios/estudiante/inicio", component: InicioEstudianteComponent},

    // DOCENTE
    { path: "usuarios/docente/iniciar-sesion", component: IniciarSesionDocenteComponent },
    { path: "usuarios/docente/registrarse", component: RegistrarseDocenteComponent },
    { path: "usuarios/docente/inicio", component: InicioDocenteComponent},

    // ASIGNATURA
    { path: "cursos/asignatura/crear", component: CrearAsignaturaComponent },

    // TEMA
    { path: "cursos/tema/crear", component: CrearTemaComponent },
];