import { ComponentFixture, TestBed } from '@angular/core/testing';

import { studentsAccountsComponent } from './studentsAccounts.component';

describe('studentsAccountsComponent', () => {
  let component: studentsAccountsComponent;
  let fixture: ComponentFixture<studentsAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ studentsAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(studentsAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
