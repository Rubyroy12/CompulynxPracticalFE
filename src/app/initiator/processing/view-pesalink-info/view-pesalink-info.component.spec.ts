import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPesalinkInfoComponent } from './view-pesalink-info.component';

describe('ViewPesalinkInfoComponent', () => {
  let component: ViewPesalinkInfoComponent;
  let fixture: ComponentFixture<ViewPesalinkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPesalinkInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPesalinkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
