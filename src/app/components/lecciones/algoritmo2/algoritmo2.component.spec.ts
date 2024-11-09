import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Algoritmo2Component } from './algoritmo2.component';

describe('Algoritmo2Component', () => {
  let component: Algoritmo2Component;
  let fixture: ComponentFixture<Algoritmo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Algoritmo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Algoritmo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
