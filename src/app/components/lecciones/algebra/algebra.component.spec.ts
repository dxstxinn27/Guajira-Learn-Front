import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraComponent } from './algebra.component';

describe('AlgebraComponent', () => {
  let component: AlgebraComponent;
  let fixture: ComponentFixture<AlgebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgebraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
