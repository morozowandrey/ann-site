import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fader } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent implements OnInit {
  title = 'ann-site';
  top: any;
  left: any;

  constructor(
  ) {
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top = ($event.pageY - 85) + "px";
    this.left = ($event.pageX - 85) + "px";
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}