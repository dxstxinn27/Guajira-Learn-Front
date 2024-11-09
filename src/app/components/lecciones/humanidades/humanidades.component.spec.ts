import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanidadesComponent } from './humanidades.component';

describe('HumanidadesComponent', () => {
  let component: HumanidadesComponent;
  let fixture: ComponentFixture<HumanidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
