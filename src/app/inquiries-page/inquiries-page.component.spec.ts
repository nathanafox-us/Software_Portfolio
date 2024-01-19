import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesPageComponent } from './inquiries-page.component';

describe('InquiriesPageComponent', () => {
  let component: InquiriesPageComponent;
  let fixture: ComponentFixture<InquiriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquiriesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InquiriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
