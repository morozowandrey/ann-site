import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobileSize: boolean = false;

  constructor(
  ) { }

  ngOnInit() {
    window.screen.availWidth <= 768 ? this.isMobileSize = true : this.isMobileSize = false;
  }

}