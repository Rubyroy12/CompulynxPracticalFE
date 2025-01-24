import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveComponentComponent } from './approve-component.component';

describe('ApproveComponentComponent', () => {
  let component: ApproveComponentComponent;
  let fixture: ComponentFixture<ApproveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
