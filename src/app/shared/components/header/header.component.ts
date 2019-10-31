import { Component, OnInit } from '@angular/core';
import { scrollTo } from '../../../helpers/scrollTo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpen: boolean = false;

  constructor(
  ) { }

  ngOnInit() {
  }

  scrollTo(target) {
    scrollTo(target);
  }

  // toggleNav() {
  //   this.navOpen = !this.navOpen;
  // }
}
