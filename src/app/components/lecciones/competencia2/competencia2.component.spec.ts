import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Competencia2Component } from './competencia2.component';

describe('Competencia2Component', () => {
  let component: Competencia2Component;
  let fixture: ComponentFixture<Competencia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Competencia2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Competencia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
