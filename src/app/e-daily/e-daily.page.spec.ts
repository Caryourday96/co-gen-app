import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDailyPage } from './e-daily.page';

describe('EDailyPage', () => {
  let component: EDailyPage;
  let fixture: ComponentFixture<EDailyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDailyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDailyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
