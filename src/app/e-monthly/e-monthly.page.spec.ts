import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMonthlyPage } from './e-monthly.page';

describe('EMonthlyPage', () => {
  let component: EMonthlyPage;
  let fixture: ComponentFixture<EMonthlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMonthlyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMonthlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
