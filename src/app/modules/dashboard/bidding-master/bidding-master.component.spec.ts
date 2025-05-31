import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingMasterComponent } from './bidding-master.component';

describe('BiddingMasterComponent', () => {
  let component: BiddingMasterComponent;
  let fixture: ComponentFixture<BiddingMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiddingMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiddingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
