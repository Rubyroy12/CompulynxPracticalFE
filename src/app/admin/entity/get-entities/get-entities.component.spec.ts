import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEntitiesComponent } from './get-entities.component';

describe('GetEntitiesComponent', () => {
  let component: GetEntitiesComponent;
  let fixture: ComponentFixture<GetEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetEntitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
