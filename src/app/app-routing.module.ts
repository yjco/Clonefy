import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './features/album/pages/main-page/main-page.component';
import { AlbumInfoComponent } from './features/album/pages/album-info/album-info.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'album-list' },
  { path: '', component: MainPageComponent },
  { path: 'album-list', component: MainPageComponent },
  { path: 'album-info/:id', component: AlbumInfoComponent },
  { path: 'sobre', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
