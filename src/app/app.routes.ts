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
import { Semestre1Component } from './components/semestres/semestre1/semestre1.component';
import { Semestre2Component } from './components/semestres/semestre2/semestre2.component';
import { Competencia1Component } from './components/lecciones/competencia1/competencia1.component';
import { Calculo1Component } from './components/lecciones/calculo1/calculo1.component';
import { LogicaComponent } from './components/lecciones/logica/logica.component';
import { IntroduccionComponent } from './components/lecciones/introduccion/introduccion.component';
import { Algoritmo1Component } from './components/lecciones/algoritmo1/algoritmo1.component';
import { CatedraComponent } from './components/lecciones/catedra/catedra.component';
import { Calculo2Component } from './components/lecciones/calculo2/calculo2.component';
import { Fisica1Component } from './components/lecciones/fisica1/fisica1.component';
import { AlgebraComponent } from './components/lecciones/algebra/algebra.component';
import { Algoritmo2Component } from './components/lecciones/algoritmo2/algoritmo2.component';
import { Competencia2Component } from './components/lecciones/competencia2/competencia2.component';
import { HumanidadesComponent } from './components/lecciones/humanidades/humanidades.component';
import { authGuard } from './auth.guard';
import { PerfilEstudianteComponent } from './components/usuarios/estudiante/perfil-estudiante/perfil-estudiante.component';
import { TiendaEstudianteComponent } from './components/usuarios/estudiante/tienda-estudiante/tienda-estudiante.component';

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
    { path: 'usuarios/estudiante/inicio', component: InicioEstudianteComponent, canActivate: [authGuard] },
    { path: "usuarios/estudiante/perfil", component: PerfilEstudianteComponent, canActivate: [authGuard] },
    { path: "usuarios/estudiante/tienda", component: TiendaEstudianteComponent, canActivate: [authGuard] },

    // DOCENTE
    { path: "usuarios/docente/iniciar-sesion", component: IniciarSesionDocenteComponent },
    { path: "usuarios/docente/registrarse", component: RegistrarseDocenteComponent },
    { path: "usuarios/docente/inicio", component: InicioDocenteComponent },

    // ASIGNATURA
    { path: "cursos/asignatura/crear", component: CrearAsignaturaComponent },

    // TEMA
    { path: "cursos/tema/crear", component: CrearTemaComponent },

    // SEMESTRES
    { path: "semestres/semestre1", component: Semestre1Component, canActivate: [authGuard] },
    { path: "semestres/semestre2", component: Semestre2Component, canActivate: [authGuard] },

    // LECCIONES
    { path: "lecciones/calculo1", component: Calculo1Component, canActivate: [authGuard] },
    { path: "lecciones/logica", component: LogicaComponent, canActivate: [authGuard] },
    { path: "lecciones/introduccion", component: IntroduccionComponent, canActivate: [authGuard] },
    { path: "lecciones/algoritmo1", component: Algoritmo1Component, canActivate: [authGuard] },
    { path: "lecciones/competencia1", component: Competencia1Component, canActivate: [authGuard] },
    { path: "lecciones/catedra", component: CatedraComponent, canActivate: [authGuard] },
    { path: "lecciones/calculo2", component: Calculo2Component, canActivate: [authGuard] },
    { path: "lecciones/fisica1", component: Fisica1Component, canActivate: [authGuard] },
    { path: "lecciones/algebra", component: AlgebraComponent, canActivate: [authGuard] },
    { path: "lecciones/algoritmo2", component: Algoritmo2Component, canActivate: [authGuard] },
    { path: "lecciones/competencia2", component: Competencia2Component, canActivate: [authGuard] },
    { path: "lecciones/humanidades", component: HumanidadesComponent, canActivate: [authGuard] },

];