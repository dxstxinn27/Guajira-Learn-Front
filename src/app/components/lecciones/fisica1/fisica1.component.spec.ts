import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fisica1Component } from './fisica1.component';

describe('Fisica1Component', () => {
  let component: Fisica1Component;
  let fixture: ComponentFixture<Fisica1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fisica1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fisica1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
