import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationInfoComponent } from './components/education-info-component/education-info.component';
import { TechnicalInfoComponent } from './components/technical-info-component/technical-info.component';
import { ToolInfoComponent } from './components/tool-info-component/tool-info.component';
import { LinkInfoComponent } from './components/link-info-component/link-info.component';
import { BlogInfoComponent} from './components/blog-info-component/blog-info.component';
import { CareerHighlightComponent } from './components/career-highlight-component/career-highlight.component';
import { ExperienceInfoComponent} from './components/experience-info-component/experience-info.component';
import { InfoRoutingModule } from './info-module-routing';
import { HttpClientModule } from '@angular/common/http';
import { InfoService } from './info.service';
import { JexiaInfoService } from './services/jexia-info.service';
import { JexiaResolver } from './services/jexia-resolver';


@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule,
    HttpClientModule
  ],
  declarations: [
    EducationInfoComponent,
    TechnicalInfoComponent,
    CareerHighlightComponent,
    ExperienceInfoComponent,
    ToolInfoComponent,
    LinkInfoComponent,
    BlogInfoComponent
  ],
  providers: [
    InfoService,
    JexiaResolver,
    JexiaInfoService
  ]
})
export class InfoModule { }
