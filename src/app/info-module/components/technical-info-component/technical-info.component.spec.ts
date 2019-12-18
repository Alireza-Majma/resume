/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechnicalInfoComponent } from './technical-info.component';
import { InfoService } from '../../services/info.service';
import { HttpClientModule } from '@angular/common/http';

describe('TechnicalInfoComponent', () => {
  let component: TechnicalInfoComponent;
  let fixture: ComponentFixture<TechnicalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ TechnicalInfoComponent ],
      providers:[InfoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
