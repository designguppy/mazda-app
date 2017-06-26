import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Banner } from '../shared/banner';
import { BannerService } from "app/shared/service/banner.service";
import { NavigationService } from "app/shared/service/navigation.service";
import { NavigationComponent } from "app/navigation/navigation.component";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  path: string;
 

  private banners: Banner[];

  private bannerAnimation;



  constructor(private _ns: NavigationService) {
    
  }

  ngOnInit() {
      
  
 }
        


 }
    
    
    
  

  
 


  



