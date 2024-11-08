import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEstudianteComponent } from './inicio-estudiante.component';

describe('InicioEstudianteComponent', () => {
  let component: InicioEstudianteComponent;
  let fixture: ComponentFixture<InicioEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
