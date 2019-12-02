/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CareerHighlightComponent } from './career-highlight-component.component';

describe('CareerHighlightComponent', () => {
  let component: CareerHighlightComponent;
  let fixture: ComponentFixture<CareerHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
