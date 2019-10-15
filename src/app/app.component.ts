import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
}