/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinkInfoComponent } from './link-info.component';
import { InfoService } from '../../services/info.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoModuleTest } from '../../info.module.test';

describe('LinkInfoComponent', () => {
  let component: LinkInfoComponent;
  let fixture: ComponentFixture<LinkInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[InfoModuleTest]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
