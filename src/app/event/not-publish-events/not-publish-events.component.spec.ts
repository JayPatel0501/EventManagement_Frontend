import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPublishEventsComponent } from './not-publish-events.component';

describe('NotPublishEventsComponent', () => {
  let component: NotPublishEventsComponent;
  let fixture: ComponentFixture<NotPublishEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotPublishEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotPublishEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
