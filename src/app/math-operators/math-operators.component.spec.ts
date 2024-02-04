import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathOperatorsComponent } from './math-operators.component';

describe('MathOperatorsComponent', () => {
  let component: MathOperatorsComponent;
  let fixture: ComponentFixture<MathOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathOperatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
