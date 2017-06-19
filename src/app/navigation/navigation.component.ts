import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    onClick(){
      console.log("i clicked you");

    };

   private links;
  constructor() {
    
    this.links = [
      {
        href:"index.html",
        title: "Tire Promotion"

      },

      {
        href:"index.html",
        title: "Major Maintenance"

      },

      {
        href:"index.html",
        title: "Minor Maintenance"

      },

      {
        href:"index.html",
        title: "First Scheduled Maintenance"

      },

      {
        href:"index.html",
        title: "Loyalty Starter"

      },

      {
        href:"index.html",
        title: "Service To Service"

      }
    ];
  }

  ngOnInit() {
  }

}