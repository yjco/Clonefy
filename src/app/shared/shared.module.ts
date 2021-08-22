import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes/time.pipe';
import { HeaderComponent } from './components/header/header.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';


@NgModule({
  declarations: [
    TimePipe,
    HeaderComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimePipe,
    HeaderComponent
  ]
})
export class SharedModule { }
