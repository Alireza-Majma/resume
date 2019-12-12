import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationInfoComponent } from './components/education-info-component/education-info.component';
import { TechnicalInfoComponent } from './components/technical-info-component/technical-info.component';
import { CareerHighlightComponent } from './components/career-highlight-component/career-highlight.component';
import { ExperienceInfoComponent} from './components/experience-info-component/experience-info.component';
import { ToolInfoComponent } from './components/tool-info-component/tool-info.component';
import { BlogInfoComponent } from './components/blog-info-component/blog-info.component';
import { LinkInfoComponent } from './components/link-info-component/link-info.component';
// import { JexiaResolver } from './services/jexia-resolver';


const routes: Routes = [
  {path: '' , children: [ // , resolve: {client: JexiaResolver}
    {path: 'education-info' , component: EducationInfoComponent},
    {path: 'technical-info' , component: TechnicalInfoComponent},
    {path: 'tool-info' , component: ToolInfoComponent },
    {path: 'link-info' , component: LinkInfoComponent},
    {path: 'blog-info' , component: BlogInfoComponent},
    {path: 'career-highlight' , component: CareerHighlightComponent},
    {path: 'experience-info' , component: ExperienceInfoComponent}
  ] }
  // {path: 'education-info' , component: EducationInfoComponent},
  // {path: 'technical-info' , component: TechnicalInfoComponent},
  // {path: 'tool-info' , component: ToolInfoComponent , resolve: {client: JexiaResolver}},
  // {path: 'link-info' , component: LinkInfoComponent},
  // {path: 'blog-info' , component: BlogInfoComponent},
  // {path: 'career-highlight' , component: CareerHighlightComponent},
  // {path: 'experience-info' , component: ExperienceInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
