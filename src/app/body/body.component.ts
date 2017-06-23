import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Banner } from '../shared/banner';
import { BannerService } from "app/shared/service/banner.service";
import { NavigationService } from "app/shared/service/navigation.service";


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  

  @Input() name;

  private banners: Banner[];

  private bannerAnimation;



  constructor(private _ns: NavigationService) {
    
  }

  ngOnInit() {

    this._ns.getProject(path){


    }
    
    
  }

  private onBannerPlay(e,b)
  {
    this.bannerAnimation = b.bannerAnimation;
    e.src = b.bannerAnimation;
  }

  clickNav(){
    

  }
  


  
}


