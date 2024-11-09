import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre1Component } from './semestre1.component';

describe('Semestre1Component', () => {
  let component: Semestre1Component;
  let fixture: ComponentFixture<Semestre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Semestre1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
