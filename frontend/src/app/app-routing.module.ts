import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImagePageComponent } from './image-page/image-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

const routes: Routes = [
  {path:'users', component: UsersComponent},
  {path:'image', component: ImagePageComponent},
  {path:'gallery', component: GalleryPageComponent},
  {path:'', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
