import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Co2WeeklyPage } from './co2-weekly.page';
describe('CO2WeeklyPage', () => {
  let component: Co2WeeklyPage;
  let fixture: ComponentFixture<Co2WeeklyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2WeeklyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Co2WeeklyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
