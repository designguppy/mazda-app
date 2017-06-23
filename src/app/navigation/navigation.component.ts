import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from "app/shared/service/navigation.service";
import { Navigation } from "app/shared/navigation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {

  _path: string;
  
  get path(): string {
    return this._path;
}

@Input('path')
set allowDay(value: string) {
    this._path = value;
    
}
  

  


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
    this.path(src:string);
    this._ns.getProject(path).subscribe( links => {
      this.links = links;
      console.log(path)
      console.log(this.links);
    });

  

  }

}
 