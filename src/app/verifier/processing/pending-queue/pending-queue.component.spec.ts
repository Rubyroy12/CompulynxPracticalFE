import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingQueueComponent } from './pending-queue.component';

describe('PendingQueueComponent', () => {
  let component: PendingQueueComponent;
  let fixture: ComponentFixture<PendingQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
