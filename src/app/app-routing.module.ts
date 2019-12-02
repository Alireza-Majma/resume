import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';


const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  // {path: 'education-info' , component: EducationInfoComponent},
  // {path: 'technical-info' , component: TechnicalInfoComponent},
  // {path: 'career-highlight' , component: CareerHighlightComponent},
  // {path: 'experience-info' , component: ExperienceInfoComponent},
  {path: 'info', loadChildren: () => import('./info-module/info-module/info.module').then(m => m.InfoModule) },
  {path: '' ,  component: HomeComponent,  pathMatch: 'full'},
  {path: '**' ,  component: HomeComponent}
  // {path: '' ,  redirectTo: '/home',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
