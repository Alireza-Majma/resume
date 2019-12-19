/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogInfoComponent } from './blog-info.component';
import { InfoService } from '../../services/info.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoModuleTest } from '../../info.module.test';

describe('BlogInfoComponent', () => {
  let component: BlogInfoComponent;
  let fixture: ComponentFixture<BlogInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ InfoModuleTest]
      // declarations:[ BlogInfoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
