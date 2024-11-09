import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Competencia1Component } from './competencia1.component';

describe('Competencia1Component', () => {
  let component: Competencia1Component;
  let fixture: ComponentFixture<Competencia1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Competencia1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Competencia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
