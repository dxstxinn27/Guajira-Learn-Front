import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculo2Component } from './calculo2.component';

describe('Calculo2Component', () => {
  let component: Calculo2Component;
  let fixture: ComponentFixture<Calculo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
