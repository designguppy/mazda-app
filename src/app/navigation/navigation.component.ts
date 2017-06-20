import { Component, OnInit } from '@angular/core';
import { NavigationService } from "app/shared/service/navigation.service";
import { Navigation } from "app/shared/navigation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {

  

 private links: Navigation[];

  constructor(private _ns: NavigationService ) {
    
  }

  
  ngOnInit() {
    
    this._ns.getNavigation().subscribe( links => {
      this.links = links
    });
  }

}