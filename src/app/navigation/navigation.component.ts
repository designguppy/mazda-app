import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from "app/shared/service/navigation.service";
import { Navigation } from "app/shared/navigation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {

  @Input() title

  constructor() {
    
  }

  
  ngOnInit() {
    
    

    
  }
  

}
 