import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VideoBgComponent } from './video-bg/video-bg.component';


@NgModule({
  declarations: [
    HomeComponent,
    VideoBgComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
