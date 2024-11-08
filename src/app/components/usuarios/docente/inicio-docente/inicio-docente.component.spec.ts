import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDocenteComponent } from './inicio-docente.component';

describe('InicioDocenteComponent', () => {
  let component: InicioDocenteComponent;
  let fixture: ComponentFixture<InicioDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
