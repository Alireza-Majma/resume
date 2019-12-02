import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component/home.component';
import { EducationInfoComponent } from './components/education-info-component/education-info.component';
import { TechnicalInfoComponent } from './components/technical-info-component/technical-info.component';
import { CareerHighlightComponent } from './components/career-highlight-component/career-highlight.component';
import { ExperienceInfoComponent} from './components/experience-info-component/experience-info.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      EducationInfoComponent,
      TechnicalInfoComponent,
      CareerHighlightComponent,
      ExperienceInfoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
