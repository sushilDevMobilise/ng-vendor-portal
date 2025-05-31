import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEventInnerComponent } from './live-event-inner.component';

describe('LiveEventInnerComponent', () => {
  let component: LiveEventInnerComponent;
  let fixture: ComponentFixture<LiveEventInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveEventInnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveEventInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
