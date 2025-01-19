import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesalinkHistoryComponent } from './pesalink-history.component';

describe('PesalinkHistoryComponent', () => {
  let component: PesalinkHistoryComponent;
  let fixture: ComponentFixture<PesalinkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesalinkHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesalinkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
