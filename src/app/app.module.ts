import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { jexiaClient, WebStorageComponent } from 'jexia-sdk-js/browser';
import { environment } from 'src/environments/environment';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule
   ],
   providers: [

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }


