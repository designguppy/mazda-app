import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  private title: string;
  constructor() { }

  ngOnInit() {
    this.title = "MCE DIGTIAL REMARKETING - TIRE COMMUNICATION";
  }

}
