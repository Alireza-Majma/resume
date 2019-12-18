/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToolInfoComponent } from './tool-info.component';
import { InfoService } from '../../services/info.service';
import { HttpClientModule } from '@angular/common/http';

describe('ToolInfoComponent', () => {
  let component: ToolInfoComponent;
  let fixture: ComponentFixture<ToolInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ToolInfoComponent ],
      providers:[InfoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
