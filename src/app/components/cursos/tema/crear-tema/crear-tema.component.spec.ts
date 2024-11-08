import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTemaComponent } from './crear-tema.component';

describe('CrearTemaComponent', () => {
  let component: CrearTemaComponent;
  let fixture: ComponentFixture<CrearTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearTemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
