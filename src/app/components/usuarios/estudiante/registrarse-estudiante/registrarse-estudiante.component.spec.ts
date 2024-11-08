import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseEstudianteComponent } from './registrarse-estudiante.component';

describe('RegistrarseEstudianteComponent', () => {
  let component: RegistrarseEstudianteComponent;
  let fixture: ComponentFixture<RegistrarseEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarseEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarseEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
