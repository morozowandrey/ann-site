import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobileSize:boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(window.screen.availWidth);
    
    window.screen.availWidth <= 768 ? this.isMobileSize = true : this.isMobileSize = false;

    console.log(this.isMobileSize);
    
  }

}
