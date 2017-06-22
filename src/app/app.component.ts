import { Component } from '@angular/core';
import { NavigationComponent } from "app/navigation/navigation.component";
import { AppHeaderComponent } from "app/app-header/app-header.component";
import { Navigation } from "app/shared/navigation";
import { NavigationService } from "app/shared/service/navigation.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  private title = "MCE DIGITAL MARKETING"

  private links: Navigation[];

  constructor (private _ns:NavigationService) {
    this.getMenuItems()


  }

  getMenuItems (){
    this._ns.getNavigation().subscribe( links => {
      this.links = links;
      console.log(this.links);
    });

  }

  
}
