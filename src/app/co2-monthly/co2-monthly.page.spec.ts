import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2MonthlyPage } from './co2-monthly.page';

describe('Co2MonthlyPage', () => {
  let component: Co2MonthlyPage;
  let fixture: ComponentFixture<Co2MonthlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2MonthlyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2MonthlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
