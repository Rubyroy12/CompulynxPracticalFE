import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAndInstructionsComponent } from './template-and-instructions.component';

describe('TemplateAndInstructionsComponent', () => {
  let component: TemplateAndInstructionsComponent;
  let fixture: ComponentFixture<TemplateAndInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAndInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAndInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
