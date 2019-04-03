import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CO2DailyPage } from './co2-daily.page';

describe('CO2DailyPage', () => {
  let component: CO2DailyPage;
  let fixture: ComponentFixture<CO2DailyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CO2DailyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CO2DailyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

