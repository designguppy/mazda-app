import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';

import { BodyComponent } from './body/body.component';

import { BannerService } from "app/shared/service/banner.service";
import { NavigationService } from "app/shared/service/navigation.service";
import { HttpModule } from "@angular/http";
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BodyService } from "app/shared/service/body.service";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AppHeaderComponent,
    NavigationComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BannerService, NavigationService, BodyService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
