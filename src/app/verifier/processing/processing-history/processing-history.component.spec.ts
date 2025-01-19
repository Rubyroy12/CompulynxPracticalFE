import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingHistoryComponent } from './processing-history.component';

describe('ProcessingHistoryComponent', () => {
  let component: ProcessingHistoryComponent;
  let fixture: ComponentFixture<ProcessingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
