

import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationInfoComponent } from './components/education-info-component/education-info.component';
import { TechnicalInfoComponent } from './components/technical-info-component/technical-info.component';
import { ToolInfoComponent } from './components/tool-info-component/tool-info.component';
import { LinkInfoComponent } from './components/link-info-component/link-info.component';
import { BlogInfoComponent } from './components/blog-info-component/blog-info.component';
import { CareerHighlightComponent } from './components/career-highlight-component/career-highlight.component';
import { ExperienceInfoComponent } from './components/experience-info-component/experience-info.component';
import { InfoRoutingModule } from './info-module-routing';
import { HttpClientModule } from '@angular/common/http';
import { InfoService } from './services/info.service';
import { RouterModule } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { DataService } from './services/data.service';
import {  } from 'jasmine';
import { InfoModule } from './info.module';

@Injectable()
export class DataServiceMock {
  public getData(): Observable<any> {
    const data = { highlight_info: [{ def: 'AAA' }] } as any;
    // console.log(data);
    return of(data) as Observable<any>;
  }
}

// export function DataServiceMockFactory() {
//   const service = jasmine.createSpyObj('DataService', ['getData']);
//   service.getData.and.returnValue(of({ highlight_info: [{ def: 'AAA' }] }));

//   // service.getData.and.returnValue(of(data));
//   return service;
// }

@NgModule({
  imports: [
    InfoModule
  ],
  declarations: [
  ],
  providers: [
    { provide: DataService, useClass: DataServiceMock },
    // { provide: DataService, useFactory: DataServiceMockFactory },
    InfoService
  ]
})
export class InfoModuleTest { }
