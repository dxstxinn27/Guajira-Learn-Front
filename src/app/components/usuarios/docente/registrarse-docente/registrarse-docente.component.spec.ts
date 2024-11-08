import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseDocenteComponent } from './registrarse-docente.component';

describe('RegistrarseDocenteComponent', () => {
  let component: RegistrarseDocenteComponent;
  let fixture: ComponentFixture<RegistrarseDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarseDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarseDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
