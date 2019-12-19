/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducationInfoComponent } from './education-info.component';
import { InfoService } from '../../services/info.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoModuleTest } from '../../info.module.test';

describe('EducationInfoComponent', () => {
  let component: EducationInfoComponent;
  let fixture: ComponentFixture<EducationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[InfoModuleTest]
      // declarations: [EducationInfoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
