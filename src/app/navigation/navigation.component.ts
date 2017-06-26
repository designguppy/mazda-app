import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from "app/shared/service/navigation.service";
import { BodyComponent } from "app/body/body.component";
import { Navigation } from "app/shared/navigation";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {

  path: string;

  


 private links: Navigation[];

  constructor(private _ns: NavigationService ) {
    
  }

  
  ngOnInit() {
    
    this._ns.getNavigation().subscribe( links => {
      this.links = links
    });
  }



  clickNav($event, l){
    var src = l.src;
    this._ns.getProject(src)
    this._ns.getElement().subscribe( path => {
      this.path = path;
      console.log(this.path)
    });

  

  }


}