import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VideoBgComponent } from './video-bg/video-bg.component';
import { AnnouncementComponent } from './announcement/announcement.component';


@NgModule({
  declarations: [
    HomeComponent,
    VideoBgComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
