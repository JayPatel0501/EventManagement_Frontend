import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnventComponent } from './add-envent.component';

describe('AddEnventComponent', () => {
  let component: AddEnventComponent;
  let fixture: ComponentFixture<AddEnventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEnventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
