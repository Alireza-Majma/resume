import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';

const routes: Routes = [
  {path: 'info', loadChildren: () => import('./info-module/info.module').then(m => m.InfoModule) },
  {path: '' ,  component: HomeComponent,  pathMatch: 'full'},
  {path: '**' ,  component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
