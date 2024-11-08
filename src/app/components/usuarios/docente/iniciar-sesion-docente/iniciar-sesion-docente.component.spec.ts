import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionDocenteComponent } from './iniciar-sesion-docente.component';

describe('IniciarSesionDocenteComponent', () => {
  let component: IniciarSesionDocenteComponent;
  let fixture: ComponentFixture<IniciarSesionDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarSesionDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarSesionDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
