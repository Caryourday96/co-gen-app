import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EWeeklyPage } from './e-weekly.page';

describe('EWeeklyPage', () => {
  let component: EWeeklyPage;
  let fixture: ComponentFixture<EWeeklyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EWeeklyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EWeeklyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
