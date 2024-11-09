import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Algoritmo1Component } from './algoritmo1.component';

describe('Algoritmo1Component', () => {
  let component: Algoritmo1Component;
  let fixture: ComponentFixture<Algoritmo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Algoritmo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Algoritmo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
