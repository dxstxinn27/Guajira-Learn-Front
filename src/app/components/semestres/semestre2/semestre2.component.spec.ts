import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre2Component } from './semestre2.component';

describe('Semestre2Component', () => {
  let component: Semestre2Component;
  let fixture: ComponentFixture<Semestre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Semestre2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
