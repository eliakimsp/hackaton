import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectivaPage } from './perspectiva.page';

describe('PerspectivaPage', () => {
  let component: PerspectivaPage;
  let fixture: ComponentFixture<PerspectivaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerspectivaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
