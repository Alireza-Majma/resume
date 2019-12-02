import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationInfoComponent } from './components/education-info-component/education-info.component';
import { TechnicalInfoComponent } from './components/technical-info-component/technical-info.component';
import { CareerHighlightComponent } from './components/career-highlight-component/career-highlight.component';
import { ExperienceInfoComponent} from './components/experience-info-component/experience-info.component';
import { InfoRoutingModule } from './info-module-routing';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  declarations: [
    EducationInfoComponent,
    TechnicalInfoComponent,
    CareerHighlightComponent,
    ExperienceInfoComponent
  ]
})
export class InfoModule { }
