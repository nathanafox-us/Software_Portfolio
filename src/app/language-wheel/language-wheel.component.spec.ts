import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageWheelComponent } from './language-wheel.component';

describe('LanguageWheelComponent', () => {
  let component: LanguageWheelComponent;
  let fixture: ComponentFixture<LanguageWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageWheelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
