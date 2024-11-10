import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaEstudianteComponent } from './tienda-estudiante.component';

describe('TiendaEstudianteComponent', () => {
  let component: TiendaEstudianteComponent;
  let fixture: ComponentFixture<TiendaEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
