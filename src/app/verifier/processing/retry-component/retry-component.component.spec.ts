import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryComponentComponent } from './retry-component.component';

describe('RetryComponentComponent', () => {
  let component: RetryComponentComponent;
  let fixture: ComponentFixture<RetryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetryComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
