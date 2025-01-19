import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkProcessingComponent } from './bulk-processing.component';

describe('BulkProcessingComponent', () => {
  let component: BulkProcessingComponent;
  let fixture: ComponentFixture<BulkProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
