import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CO2WeeklyPage } from './co2-weekly.page';

describe('CO2WeeklyPage', () => {
  let component: CO2WeeklyPage;
  let fixture: ComponentFixture<CO2WeeklyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CO2WeeklyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CO2WeeklyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
