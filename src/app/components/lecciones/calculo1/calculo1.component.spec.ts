import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculo1Component } from './calculo1.component';

describe('Calculo1Component', () => {
  let component: Calculo1Component;
  let fixture: ComponentFixture<Calculo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
