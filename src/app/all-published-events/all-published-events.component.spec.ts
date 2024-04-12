import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPublishedEventsComponent } from './all-published-events.component';

describe('AllPublishedEventsComponent', () => {
  let component: AllPublishedEventsComponent;
  let fixture: ComponentFixture<AllPublishedEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPublishedEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPublishedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
