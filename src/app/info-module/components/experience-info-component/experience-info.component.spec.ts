/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExperienceInfoComponent } from './experience-info.component';
import { InfoService } from '../../services/info.service';
import { HttpClientModule } from '@angular/common/http';

describe('ExperienceInfoComponent', () => {
  let component: ExperienceInfoComponent;
  let fixture: ComponentFixture<ExperienceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ExperienceInfoComponent ],
      providers:[InfoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
