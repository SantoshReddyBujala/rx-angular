import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLeaningComponent } from './rxjs-leaning.component';

describe('RxjsLeaningComponent', () => {
  let component: RxjsLeaningComponent;
  let fixture: ComponentFixture<RxjsLeaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsLeaningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsLeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
