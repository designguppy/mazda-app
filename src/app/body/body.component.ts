import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Banner } from '../shared/banner';
import { BannerService } from "app/shared/service/banner.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() name;

  private banners: Banner[];

  private bannerAnimation;



  constructor(private _bs: BannerService) {
    
  }

  ngOnInit() {
    
    this._bs.getBanners().subscribe( banners => {
      this.banners = banners
    });
  }

  private onBannerPlay(e,b)
  {
    this.bannerAnimation = b.bannerAnimation;
    e.src = b.bannerAnimation;
  }


  
}
