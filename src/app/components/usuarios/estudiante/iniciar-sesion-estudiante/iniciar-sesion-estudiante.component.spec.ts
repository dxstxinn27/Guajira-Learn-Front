import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionEstudianteComponent } from './iniciar-sesion-estudiante.component';

describe('IniciarSesionEstudianteComponent', () => {
  let component: IniciarSesionEstudianteComponent;
  let fixture: ComponentFixture<IniciarSesionEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarSesionEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarSesionEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
