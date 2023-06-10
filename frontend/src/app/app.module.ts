import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { UsersComponent } from './users/users.component';
import { HomePageComponent } from './home-page/home-page.component';

import { MaterialModule } from './material/material.module';

import { ImagePageComponent } from './image-page/image-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomePageComponent,
    ImagePageComponent,
    GalleryPageComponent
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
