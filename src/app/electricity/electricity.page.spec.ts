import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityPage } from './electricity.page';

describe('ElectricityPage', () => {
  let component: ElectricityPage;
  let fixture: ComponentFixture<ElectricityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
