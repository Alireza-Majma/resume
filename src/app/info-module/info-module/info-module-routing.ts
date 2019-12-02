import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationInfoComponent } from './components/education-info-component/education-info.component';
import { TechnicalInfoComponent } from './components/technical-info-component/technical-info.component';
import { CareerHighlightComponent } from './components/career-highlight-component/career-highlight.component';
import { ExperienceInfoComponent} from './components/experience-info-component/experience-info.component';


const routes: Routes = [
  {path: 'education-info' , component: EducationInfoComponent},
  {path: 'technical-info' , component: TechnicalInfoComponent},
  {path: 'career-highlight' , component: CareerHighlightComponent},
  {path: 'experience-info' , component: ExperienceInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
