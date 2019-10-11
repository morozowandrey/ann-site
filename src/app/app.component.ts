import { Component, HostListener, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ann-site';
  top: any;
  left: any;
  isMobileSize: boolean = false;
  isHomePage: boolean = false;

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage =
          event.url == '/';
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.top = ($event.pageY - 85) + "px";
    this.left = ($event.pageX - 85) + "px";
  }

  ngOnInit(): void {
    this.isMobileSize = window.innerWidth < 768;
  }

  ngAfterViewInit(): void {
    // this.isMobileSize = window.innerWidth < 768;
  }
}