import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOnboardComponent } from './vendor-onboard.component';

describe('VendorOnboardComponent', () => {
  let component: VendorOnboardComponent;
  let fixture: ComponentFixture<VendorOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorOnboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
