import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUnpublishEventsComponent } from './all-unpublish-events.component';

describe('AllUnpublishEventsComponent', () => {
  let component: AllUnpublishEventsComponent;
  let fixture: ComponentFixture<AllUnpublishEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUnpublishEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUnpublishEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
