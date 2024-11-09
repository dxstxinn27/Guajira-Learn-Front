import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatedraComponent } from './catedra.component';

describe('CatedraComponent', () => {
  let component: CatedraComponent;
  let fixture: ComponentFixture<CatedraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatedraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatedraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
