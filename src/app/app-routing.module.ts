import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from '../home-component/home-component.component';


const routes: Routes = [
  {path: 'home' , component: HomeComponentComponent},
  {path: '' ,  redirectTo: '/home',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
