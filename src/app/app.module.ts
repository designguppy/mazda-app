import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';

import { BodyComponent } from './body/body.component';

import { BannerService } from "app/shared/service/banner.service";
import { HttpModule } from "@angular/http";
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AppHeaderComponent,
    NavigationComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
