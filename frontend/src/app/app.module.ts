import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { UsersComponent } from './users/users.component';
import { HomePageComponent } from './home-page/home-page.component';

import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './material/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomePageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
