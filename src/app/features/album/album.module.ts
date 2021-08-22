import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AlbumInfoComponent } from './pages/album-info/album-info.component';

const components = [
  AlbumListComponent,
  AlbumCardComponent
];

const pages = [
  AlbumPageComponent,
  AlbumInfoComponent,
  MainPageComponent
];

@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumCardComponent,
    AlbumPageComponent,
    AlbumInfoComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ...components,
    ...pages
  ]
})
export class AlbumModule { }
